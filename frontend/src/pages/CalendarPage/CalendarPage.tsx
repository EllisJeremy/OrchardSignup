import CalendarHeaderMonths from "./components/CalendarHeaderMonths/CalendarHeaderMonths.tsx";
import CalendarHeaderDays from "./components/CalendarHeaderDays/CalendarHeaderDays.tsx";
import Calendar from "./components/Calendar/Calendar.tsx";
import TaskModal from "./components/TaskModal/TaskModal.tsx";
import LoginModal from "./components/LoginModal/LoginModal.tsx";

import { taskStore } from "./calendarStore.ts";
import { dateStore } from "./calendarStore.ts";
import { useEffect } from "react";
import { RawTask } from "./calendarTypes/rawTask.ts";
import { buildTaskDatabaseFromRaw } from "./functions/buildTaskDatabaseFromRaw.ts";

export default function CalendarPage() {
  const { taskDatabase, setTaskDatabase } = taskStore();
  const { month, year } = dateStore();
  const padMonth = month.toString().padStart(2, "0");

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await fetch(`http://localhost:8080/tasks/?year=${year}&month=${padMonth}`);
        const data: RawTask[] = await res.json();

        const groupedTasks = buildTaskDatabaseFromRaw(data);
        setTaskDatabase(groupedTasks);
      } catch (err) {
        console.error("Failed to load tasks", err);
      }
    };

    fetchTasks();
  }, [year, month]);

  return (
    <>
      <div className="calendar">
        <CalendarHeaderMonths />
        <CalendarHeaderDays />
        <Calendar />
        <TaskModal />
        <LoginModal />
      </div>
    </>
  );
}
