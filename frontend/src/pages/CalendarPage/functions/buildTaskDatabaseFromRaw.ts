import { TaskClass } from "../calendarStore";
import { RawTask } from "../calendarTypes/rawTask";

export function buildTaskDatabaseFromRaw(rawTasks: RawTask[]): Map<string, TaskClass[]> {
  const taskMap = new Map<string, TaskClass[]>();

  for (const raw of rawTasks) {
    const {
      taskId,
      taskDate,
      taskTitle,
      taskStartTime,
      taskEndTime,
      taskDescription,
      taskColor,
      taskOwner,
      taskType,
      taskRepeat,
    } = raw;

    const key = taskDate.split("T")[0];
    const task = new TaskClass(
      taskId,
      key,
      taskTitle,
      taskStartTime,
      taskEndTime,
      taskDescription,
      taskColor,
      taskOwner,
      taskType,
      taskRepeat,
    );

    if (!taskMap.has(key)) taskMap.set(key, []);
    taskMap.get(key)!.push(task);
  }
  return taskMap;
}
