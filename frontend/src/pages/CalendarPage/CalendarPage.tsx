import CalendarHeaderMonths from "./components/CalendarHeaderMonths/CalendarHeaderMonths.tsx";
import CalendarHeaderDays from "./components/CalendarHeaderDays/CalendarHeaderDays.tsx";
import Calendar from "./components/Calendar/Calendar.tsx";
import TaskModal from "./components/TaskModal/TaskModal.tsx";
import LoginModal from "./components/LoginModal/LoginModal.tsx";

import { taskStore } from "./calendarStore.ts";
import { dateStore } from "./calendarStore.ts";
import { useEffect } from "react";
import { fetchTasks } from "./functions/network.ts";

export default function CalendarPage() {
  const { setTaskDatabase, databaseReload } = taskStore();
  const { month, year } = dateStore();
  const padMonth = month.toString().padStart(2, "0");

  useEffect(() => {
    fetchTasks(year, padMonth, setTaskDatabase);
  }, [year, month, databaseReload]);

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
