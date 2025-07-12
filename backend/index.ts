import express from "express";
import mysql from "mysql2/promise";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const port = process.env.PORT || 8000;

const app = express();
app.use(cors());
app.use(express.json());

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: process.env.mySQLPassword,
  database: "orchard",
});

app.get("/tasks", async (req, res) => {
  try {
    const year = req.query.year as string;
    const month = req.query.month as string;

    const start = `${year}-${month}-01`;

    const endDate = new Date(Number(year), Number(month), 0);
    const end = endDate.toISOString().split("T")[0];

    const [rows] = await pool.query(
      "SELECT * FROM tasks WHERE taskDate BETWEEN ? AND ? ORDER BY taskDate, taskStartTime",
      [start, end]
    );
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
