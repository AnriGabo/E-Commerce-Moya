// ვიყენებთ ექსპრესის ბიბლიოთეკას
import express from "express";
const app = express();
// convert raw text to js object
app.use(express.json());

import { config } from "dotenv";
config();

import helmet from "helmet";
app.use(helmet())
// ბაზასთან ქონექშენი
import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const client = await pool.connect();

app.get("/", async (req, res) => {
  try{
    const result = await client.query({
      text:'SELECT * FROM registration'
    })
    res.status(200).json({ rows: result.rows })
  }catch(err){
    console.error(err);
    res.status(500).send("Retrive data is not succsessfully")
  }
});

app.post("/auth/register", async (req, res) => {
  const registruser = req.body;

  try {
    const result = await client.query({
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

app.delete("/user/:id", async (req, res) => {
  // req.params - არის რეალურად ობიექტი რომელიც ინახავს url ში გადაცემულ დინამიურ მნიშვნელობებს
  // ამ შემთხვევაში /:id ში რასაც გადავცემთ რექვესთის დროს, ის შეინახება DeleteUserId ცვლადში
  const DeleteUserId = req.params.id;

  try {
    const result = await client.query({
      text: `DELETE FROM registration WHERE user_id = $1`,
      values: [DeleteUserId],
    });
    res.status(204).send(`Delete is executing succsessfuly`);
  } catch (err) {
    console.error(err);
    res.status(500).send(`Delete data is failed`);
  }
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
