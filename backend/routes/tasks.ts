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

router.delete("/:taskId", async (req, res) => {
  const { taskId } = req.params;

  try {
    const [result] = await pool.query("DELETE FROM tasks WHERE taskId = ?", [taskId]);
    res.sendStatus(204);
  } catch (error) {
    console.error("Delete error:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});

router.post("/", async (req, res) => {
  const {
    taskDate,
    taskTitle,
    taskStartTime,
    taskEndTime,
    taskDescription,
    taskColor,
    taskOwner,
    taskType,
    taskRepeat,
  } = req.body;
  console.log(taskType); //logs event or task in lowercase

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
