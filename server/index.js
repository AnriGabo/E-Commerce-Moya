import { config } from "dotenv";
config();

// ბაზასთან ქონექშენი
import pg from "pg";
const { Pool } = pg;

// ვიყენებთ ექსპრესის ბიბლიოთეკას
import express from "express";
const app = express();
app.use(express.json());

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_database,
  password: process.env.DB_password,
  port: process.env.DB_PORT,
});


app.get("/", async (req, res) => {
  const client = await pool.connect();
  const result = await client.query({
    text: "SELECT * FROM registration",
  });

  // პასუხი
  res.json(result.rows);
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
