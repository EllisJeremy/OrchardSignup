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
