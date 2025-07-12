export interface RawTask {
  date: string;
  title: string;
  startTime: string;
  endTime: string | null;
  description: string;
  color: string;
  owner: string | null;
  type: string;
  repeat: string | null;
}
