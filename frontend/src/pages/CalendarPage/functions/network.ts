import { RawTask } from "../calendarTypes/rawTask";
import { buildTaskDatabaseFromRaw } from "./buildTaskDatabaseFromRaw";
import { TaskClass } from "../calendarStore";

export const fetchTasks = async (
  year: number,
  month: string,
  setTaskDatabase: (taskMap: Map<string, TaskClass[]>) => void,
) => {
  try {
    const res = await fetch(`http://localhost:8080/tasks/by-month/?year=${year}&month=${month}`);
    const data: RawTask[] = await res.json();

    const groupedTasks = buildTaskDatabaseFromRaw(data);
    setTaskDatabase(groupedTasks);
  } catch (err) {
    console.error("Failed to load tasks", err);
  }
};

export async function createTask(task: {
  taskDate: string;
  taskTitle: string;
  taskStartTime: string;
  taskEndTime: string | null;
  taskDescription: string;
  taskColor: string;
  taskOwner: string | null;
  taskType: string;
  taskRepeat: string | null;
}) {
  const res = await fetch("http://localhost:8080/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  if (!res.ok) {
    throw new Error("Failed to create task");
  }
}

export async function deleteTask(taskId: number) {
  const res = await fetch(`http://localhost:8080/tasks/${taskId}`, {
    method: "DELETE",
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error("Failed to delete task");
  }
}
