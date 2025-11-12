import express from "express";
import { config } from "dotenv";
import helmet from "helmet";
import pg from "pg";
import cors from "cors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import authenticationToken from "./authMiddleware.js";
import {
  userRegistrationSchema,
  userSignInSchema,
} from "./schemas/userSchemas.js";
import {
  ValidateRegister,
  ValidateSignIn,
} from "./middleware/validationMiddleware.js";

const app = express();
// Deserialization როგორ js object და დებს req.bodyში
app.use(express.json());
// კითხულობს ყველა შემომავალ ქუქის და დებს req.cookies ობიექტში
app.use(cookieParser());

config();
app.use(helmet());

app.use(
  cors({
    origin: "http://localhost:5174",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

const { Pool } = pg;
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

app.get("/", async (req, res) => {
  try {
    const result = await pool.query({
      text: "SELECT * FROM registration",
    });
    res.status(200).json({ rows: result.rows });
  } catch (err) {
    console.error(err);
    res.status(500).send("Retrive data is not succsessfully");
  }
});

// ვალიდაციას წარმატებით გადის რადგან როვერ გადიოდეს დააბრუნდებოდა problem detail json
// controllerზეც გადადის და რაღაც აქ არის პრობლემა უკვე
app.post(
  "/auth/register",
  ValidateRegister({ body: userRegistrationSchema }),

  async (req, res) => {
    const { username, lastname, email, password_hash } = req.body;
    console.log(req.body);
    // console.log("password_hash:", password_hash);

    const COST = 12;
    // აქ ქოსთროა გადაცემული რამე მაგიტო ხოარა
    const storedHash = await bcrypt.hash(password_hash, COST);

    // აქ რამე ხოარ ჭირდბეა შემოწმება ნეტა პაროლს და ხელახლა შეადარე პაროლი ერთმანეთს
    try {
      const result = await pool.query({
        text: `INSERT INTO registration (username, lastname, email, password_hash)
      VALUES ($1, $2, $3, $4)
      RETURNING user_id, username, email, created_at
      `,
        values: [username, lastname, email, storedHash],
      });
      res.status(201).json({ message: `Data Is Adding Succsessfully` });
    } catch (err) {
      if (err.code === "23505" && err.constraint === "registration_email_key") {
        return res
          .status(409)
          .type("application/problem+json")
          .json({
            type: "https://www.moya.com/problems/dublicate-email",
            title: "Invalid Credentials",
            detail: "Registration Failed",
            "invalid-params": [
              {
                pointer: "/email",
                detail: "Registration failed",
              },
            ],
          });
      }
      // აქიდან წამოსულა ყველაფერი
      res.status(500).json({ error: `Wrong Credentials` });
    }
  }
);

app.post(
  "/auth/login",
  ValidateSignIn({ body: userSignInSchema }),
  async (req, res) => {
    const { email, password_hash } = req.body;
    try {
      const result = await pool.query({
        text: `SELECT user_id,email, password_hash FROM registration WHERE email = $1`,
        values: [email],
      });

      if (result.rows.length === 0) {
        return res
          .status(401)
          .type("application/problem+json")
          .json({
            type: "https://www.moya.com/problems/user-not-found",
            title: "Invalid Credentials",
            status: 401,
            detail: "Email or password is incorrect",
            "invalid-params": [
              {
                detail: "Email is not valid format or it is wrong",
                pointer: "/email",
              },
            ],
          });
      }

      const hashedPasswordInDb = result.rows[0].password_hash;
      const match = await bcrypt.compare(password_hash, hashedPasswordInDb);
      if (!match) {
        return res
          .status(401)
          .type("application/problem+json")
          .json({
            type: "https://www.moya.com/problems/incorrect-password",
            title: "Invalid Credentials",
            status: 401,
            detail: `Email or password is incorrect`,
            "invalid-params": [
              {
                detail: "Email or password is incorrect",
                pointer: "/password_hash",
              },
            ],
          });
      }

      const userId = result.rows[0].user_id;
      const payload = {
        sub: userId,
        email: email,
      };

      // jwt = 3part, header ავტომატურად, payload object, signature = secret key
      const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "13m",
      });

      res.cookie("access", accessToken, {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        maxAge: 13 * 60 * 1000,
        path: "/",
      });

      // const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
      //   expiresIn: 60 * 60 * 24 * 7,
      //   algorithm: "HS256",
      //   issuer: "MOYA",
      // });

      // res.cookie("refresh", refreshToken, {
      //   httpOnly: true,
      //   secure: false,
      //   sameSite: "lax",
      //   maxAge: 60 * 60 * 24 * 7,
      //   path: "/auth",
      // });

      return res.status(200).json({ message: `Logged In` });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: `Internal Server Error` });
    }
  }
);

// ეს ჯერ ჯერობით არის სატესტო ვერსია, ეს არის დაცული როუტი
// ჯერ დარტყმა ხდება რექვესთის authenticationTokenზედა ამ საზღვარმა თუ გაატარა
// მოვა აქ თუარადა აარა :),ყოველ API CALLებზე გამოვიყენებთ მას
app.get("/api/me", authenticationToken, (req, res) => {
  res.json({ id: req.user.id, email: req.user.email });
});

// ესეც სატესტო ვერსიაა ჯერ ჯერობით
app.get("/auth/refresh", (req, res) => {
  res.json({ message: `This is refresh token` });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
