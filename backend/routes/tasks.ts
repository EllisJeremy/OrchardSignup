import express from "express";
const router = express.Router();
import { pool } from "../index";

router.get("/by-month", async (req, res) => {
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

export default router;
