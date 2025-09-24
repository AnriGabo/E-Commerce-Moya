import express from "express";
import { config } from "dotenv";
import helmet from "helmet";
import pg from "pg";
import cors from "cors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import authenticationToken from "./authMiddleware.js";

const app = express();
// გადმოაკონვერტირებს როგორ js object და დებს req.bodyში
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

app.post("/auth/register", async (req, res) => {
  const { username, lastname, email, password_hash } = req.body;

  if (!username || !lastname || !email || !password_hash) {
    return res.status(404).json({ message: `Input Fields is Required` });
  }

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
    console.error(err);
    res.status(500).json({ error: `Wrong Credentials` });
  }
});

app.post("/auth/login", async (req, res) => {
  const { email, password_hash } = req.body;

  if (!email || !password_hash) {
    return res.status(404).json({ message: `Email And Password is required` });
  }

  try {
    const result = await pool.query({
      text: `SELECT user_id,email, password_hash FROM registration WHERE email = $1`,
      values: [email],
    });

    if (result.rows.length === 0) {
      return res.status(401).json({ message: `Invalid credentials ` });
    }

    const hashedPasswordinDb = result.rows[0].password_hash;
    const match = await bcrypt.compare(password_hash, hashedPasswordinDb);
    if (!match) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const userId = result.rows[0].user_id;

    const payload = {
      sub: userId,
      email: email,
    };
    const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "13m",
    });

    // const refreshToken

    // ამ ტოკენს და კონფიგურაციას ვინახავთ ქუქიში
    res.cookie("access", accessToken, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 13 * 60 * 1000,
      path: "/",
    });

    return res.status(200).json({ message: `Logged In` });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: `Invalid Credentials` });
  }
});


app.get("/api/me", authenticationToken, (req, res) => {
  res.json({ id: req.user.id, email: req.user.email });
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
