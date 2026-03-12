import cron from "node-cron";
import { pool } from "../index";
import { RowDataPacket } from "mysql2";

interface Task extends RowDataPacket {
  taskId: number;
  taskDate: string;
  taskTitle: string;
  taskStartTime: string;
  taskEndTime: string | null;
  taskDescription: string;
  taskColor: string;
  taskOwnerId: number | null;
  taskType: "event" | "task";
  taskRepeat: string | null;
}

async function generateRecurringTasks() {
  const [templates] = await pool.query<Task[]>(
    `SELECT * FROM tasks WHERE taskRepeat IS NOT NULL AND parentTaskId IS NULL`,
  );

  const lookahead = new Date();
  lookahead.setMonth(lookahead.getMonth() + 2);

  for (const task of templates) {
    let next = new Date(task.taskDate);

    while (next <= lookahead) {
      if (task.taskRepeat === "weekly") {
        next.setDate(next.getDate() + 7);
      } else if (task.taskRepeat === "biweekly") {
        next.setDate(next.getDate() + 14);
      } else if (task.taskRepeat === "monthly") {
        next.setMonth(next.getMonth() + 1);
      } else {
        break;
      }

      if (next > lookahead) break;

      const nextDate = next.toISOString().split("T")[0];

      const [existing] = await pool.query<RowDataPacket[]>(
        `SELECT taskId FROM tasks WHERE parentTaskId = ? AND taskDate = ?`,
        [task.taskId, nextDate],
      );

      if ((existing as RowDataPacket[]).length === 0) {
        await pool.query(
          `INSERT INTO tasks
            (taskDate, taskTitle, taskStartTime, taskEndTime, taskDescription, taskColor, taskOwnerId, taskType, taskRepeat, parentTaskId)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, NULL, ?)`,
          [
            nextDate,
            task.taskTitle,
            task.taskStartTime,
            task.taskEndTime,
            task.taskDescription,
            task.taskColor,
            null,
            task.taskType,
            task.taskId,
          ],
        );
      }
    }
  }
}

cron.schedule("0 0 * * *", generateRecurringTasks);

export { generateRecurringTasks };
