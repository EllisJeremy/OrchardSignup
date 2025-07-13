import styles from "./Calendar.module.css";
import { getStartingDay, getEndingDay, getDaysInMonth } from "../../functions/calendarFunctions";
import { dateStore, modalStore, taskStore } from "../../calendarStore";
import DayTask from "./DayTask/DayTask";

export default function Calendar() {
  const { month, year, setCurrentDay } = dateStore();
  const daysInMonth: number = getDaysInMonth(year, month);

  const { openCloseTaskModal } = modalStore();
  const { setDate, resetTaskVariables } = taskStore();

  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    <div className={styles.calendarDiv}>
      {/* Create blank cells to ensure the first real day is on the correct day of the week */}
      {Array.from({ length: getStartingDay(month, year) }, (_, i) => (
        <div className={styles.dayDivBlank} key={"blank" + i}></div>
      ))}

      {/* Create all the cells for each day of the month */}
      {Array.from({ length: daysInMonth }, (_, i) => {
        const paddedDate = `${year}-${pad(month)}-${pad(i + 1)}`;
        return (
          <div
            className={styles.dayDiv}
            key={paddedDate}
            onClick={() => {
              openCloseTaskModal();
              setCurrentDay(i + 1);
              resetTaskVariables();
              setDate(paddedDate);
            }}
          >
            <div className={styles.dayNumberDiv}>{i + 1}</div>

            <div className={styles.dayContentDiv}>
              <DayTask cellDate={paddedDate} />
            </div>
          </div>
        );
      })}

      {/* Create blank cells to fill the extra slots at the end */}
      {Array.from({ length: getEndingDay(getStartingDay(month, year), daysInMonth) }, (_, i) => (
        <div className={styles.dayDivBlank} key={"endblank" + i}></div>
      ))}
    </div>
  );
}
