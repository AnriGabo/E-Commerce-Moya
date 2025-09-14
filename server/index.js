import express from "express";
const app = express();
app.use(express.json());

import { config } from "dotenv";
config();

import helmet from "helmet";
app.use(helmet());
import cors from "cors";

app.use(
  cors({
    // მხოლოდ და მხოლოდ ამისგანაა დაშვებული რექვესთი მაგას ვეუბნებით აქ 
    origin: "http://localhost:5174",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

import pg from "pg";
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

// Create data, insert
app.post("/auth/register", async (req, res) => {
  const registruser = req.body;

  try {
    const result = await pool.query({
      text: `INSERT INTO registration (username, lastname, email, password_hash)
      VALUES ($1, $2, $3, $4)
      RETURNING user_id, username, email, created_at
      `,
      values: [
        registruser.username,
        registruser.lastname,
        registruser.email,
        registruser.password_hash,
      ],
    });
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: `Database insert failed` });
  }
});

// DELETE data
app.delete("/user/:id", async (req, res) => {
  // ამ შემთხვევაში /:id ში რასაც გადავცემთ რექვესთის დროს, ის შეინახება DeleteUserId ცვლადში
  const DeleteUserId = req.params.id;

  try {
    const result = await pool.query({
      text: `DELETE FROM registration WHERE user_id = $1`,
      values: [DeleteUserId],
    });
    res.status(204).send(`Delete is executing succsessfuly`);
  } catch (err) {
    console.error(err);
    res.status(500).send(`Delete data is failed`);
  }
});

// MOdified data

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

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
