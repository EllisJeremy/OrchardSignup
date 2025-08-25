export interface RawTask {
  taskId: number;
  taskDate: string;
  taskTitle: string;
  taskStartTime: string;
  taskEndTime: string | null;
  taskDescription: string;
  taskColor: string;
  taskType: string;
  taskRepeat: string | null;
  ownerId: number | null;
  ownerEmail: string | null;
  ownerName: string | null;
}
