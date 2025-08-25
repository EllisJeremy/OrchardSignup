import express from "express";
const router = express.Router();
import { pool } from "../index";

router.get("/by-email", async (req, res) => {
  try {
    const email = req.query.email as string;

    const [rows] = await pool.query("SELECT * FROM accounts WHERE MATCH(?)", [email]);
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
});

router.post("/", async (req, res) => {
  const { email, password, name, creationDate } = req.body;

  try {
    const [result] = await pool.query(
      `INSERT INTO tasks 
        (taskDate, taskTitle, taskStartTime, taskEndTime, taskDescription, taskColor, taskOwner, taskType, taskRepeat) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        taskDate,
        taskTitle,
        taskStartTime,
        taskEndTime,
        taskDescription,
        taskColor,
        taskOwner,
        taskType,
        taskRepeat,
      ]
    );

    res.status(201).json({ success: true, insertId: (result as any).insertId });
  } catch (error) {
    console.error("Insert error:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});

export default router;
