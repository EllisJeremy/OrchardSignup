import { TaskClass } from "../calendarStore";
import { RawTask } from "../calendarTypes/rawTask";

export function buildTaskDatabaseFromRaw(rawTasks: RawTask[]): Map<string, TaskClass[]> {
  const taskMap = new Map<string, TaskClass[]>();

  for (const raw of rawTasks) {
    const {
      date: taskDate,
      title: taskTitle,
      startTime: taskStartTime,
      endTime: taskEndTime,
      description: taskDescription,
      color: taskColor,
      owner: taskOwner,
      type: taskType,
      repeat: taskRepeat,
    } = raw;
    console.log(taskTitle);
    const key = taskDate.split("T")[0];
    const task = new TaskClass(
      key,
      taskTitle || "No Title",
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
