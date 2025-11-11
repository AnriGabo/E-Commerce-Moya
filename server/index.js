import express from "express";
import { config } from "dotenv";
import helmet from "helmet";
import pg from "pg";
import cors from "cors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import authenticationToken from "./authMiddleware.js";
import { userRegistrationSchema,userSignInSchema } from "./schemas/userSchemas.js";
import { ValidateRegister,ValidateSignIn } from "./middleware/validationMiddleware.js";

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

app.delete("/user/:id", async (req, res) => {
  // ამ შემთხვევაში /:id ში რასაც გადავცემთ რექვესთის დროს, ის შეინახება DeleteUserId ცვლადში
  const DeleteUserId = req.params.id;

  try {
    const result = await pool.query({
      text: `DELETE FROM registration WHERE user_id = $1`,
      values: [DeleteUserId],
    });

    res.status(200).send(`Delete Request is executing succsessfuly`);
  } catch (err) {
    console.error(err);
    res.status(500).send(`Delete data is failed`);
  }
});
app.put("/userchange/:id", async (req, res) => {
  // URL ში გადაცემულ ID-ს იღებს
  const changeId = req.params.id;
  // object data ინახება აქ, ის მონაცემები რითაც უნდა განახლდეს
  const changedBody = req.body;

  try {
    const result = await pool.query({
      text: `UPDATE registration SET username = $1, lastname = $2 WHERE user_id = $3 `,
      values: [changedBody.username, changedBody.lastname, changeId],
    });
    res.status(201).json(`data is changing succsesfully`);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: `Data Modified is failing` });
  }
});

app.post(
  "/auth/register",
  ValidateRegister({ body: userRegistrationSchema }),
  // ვფიქრობთ ისინი წასაშლელია ქვევით შედარებები

  async (req, res) => {
    const { username, lastname, email, password_hash } = req.body;
    if (!username || !lastname || !email || !password_hash) {
      return res
        .status(400)
        .type("application/problem+json")
        .json({
          type: "https://www.moya.com/problems/validation",
          title: "Validation Error",
          detail: "Required Filled Is Missing",
          errors: {
            username: ["Username is required"],
            lastname: ["Lastname is Required"],
            email: ["Email is Required"],
            password_hash: ["Password is Required"],
          },
        });
    }

    // if (password_hash.length < 8 || password_hash.length > 25) {
    //   return res
    //     .status(400)
    //     .type("application/problem+json")
    //     .json({
    //       type: "https://www.moya.com/problems/validation-error",
    //       title: "Validation Error",
    //       detail: "Password must be between 8 and 25 characters long",
    //       "invalid-params": [
    //         {
    //           pointer: "/password ",
    //           detail: "Password must be between 8 and 25 characters long",
    //         },
    //       ],
    //     });
    // }

    const COST = 12;
    const storedHash = await bcrypt.hash(password_hash, COST);

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
      res.status(500).json({ error: `Wrong Credentials` });
    }
  }
);

app.post(
  "/auth/login",
  ValidateSignIn({ body: userSignInSchema }),
  async (req, res) => {
    const { email, password_hash } = req.body;

    // if (!email || !password_hash) {
    //   return res
    //     .status(400)
    //     .type("application/problem+json")
    //     .json({
    //       type: "https://www.moya.com/problems/validation-error",
    //       title: "Validation Error",
    //       status: 400,
    //       detail: `Required field is missing`,
    //       errors: {
    //         email: ["Email is required"],
    //         password: ["Password is required"],
    //       },
    //     });
    // }

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
