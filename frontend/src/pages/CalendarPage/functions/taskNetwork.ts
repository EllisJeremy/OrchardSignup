import { RawTask } from "../calendarTypes/rawTask";
import { buildTaskDatabaseFromRaw } from "./buildTaskDatabaseFromRaw";
import { TaskClass } from "../calendarStore";
import { API_URL } from "../../../../config";

export const fetchTasks = async (
  year: number,
  month: string,
  setTaskDatabase: (taskMap: Map<string, TaskClass[]>) => void,
) => {
  try {
    const res = await fetch(`${API_URL}/tasks/by-month/?year=${year}&month=${month}`);
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
  taskOwner: number | null;
  taskType: string;
  taskRepeat: string | null;
}) {
  const res = await fetch(`${API_URL}/tasks`, {
    method: "POST",
    credentials: "include",
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
  const res = await fetch(`${API_URL}/tasks/${taskId}`, {
    method: "DELETE",
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error("Failed to delete task");
  }
}

export async function joinTask(taskId: number) {
  const res = await fetch(`${API_URL}/tasks/${taskId}/join`, {
    method: "PATCH",
    credentials: "include",
  });

  if (!res.ok) throw new Error("Failed to join task");
  return await res.json();
}

export async function dropTask(taskId: number) {
  const res = await fetch(`${API_URL}/tasks/${taskId}/drop`, {
    method: "PATCH",
    credentials: "include",
  });

  if (!res.ok) throw new Error("Failed to drop task");
  return await res.json();
}
