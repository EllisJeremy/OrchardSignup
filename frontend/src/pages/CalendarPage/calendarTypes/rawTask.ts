export interface RawTask {
  taskDate: string;
  taskTitle: string;
  taskStartTime: string;
  taskEndTime: string | null;
  taskDescription: string;
  taskColor: string;
  taskOwner: string | null;
  taskType: string;
  taskRepeat: string | null;
}
