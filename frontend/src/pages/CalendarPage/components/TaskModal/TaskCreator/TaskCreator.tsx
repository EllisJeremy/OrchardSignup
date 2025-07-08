import styles from "./TaskCreator.module.css";
import { taskStore } from "../../../calendarStore";
import plus from "../../../../../assets/+.svg";
import TimeInput from "./TimeDiv/TimeInput";

export default function TaskCreator() {
  const {
    title,
    date,
    description,
    color,
    type,
    admin,
    startHour,
    startMinute,
    startMeridiem,
    endHour,
    endMinute,
    endMeridiem,
    setTitle,
    setDescription,
    setColor,
    setTaskDatabase,
    setType,
    setStartHour,
    setStartMinute,
    setStartMeridiem,
    setEndHour,
    setEndMinute,
    setEndMeridiem,
  } = taskStore();

  if (admin) {
    return (
      <div className={styles.taskCreatorDiv}>
        <input
          className={styles.titleInput}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="title"
        ></input>

        <div
          className={styles.typeDiv}
          onClick={() => setType("Event")}
          style={{ background: type === "Event" ? "rgba(0, 180, 255, .5)" : undefined }}
        >
          Event
        </div>
        <div
          className={styles.typeDiv}
          onClick={() => setType("Task")}
          style={{ background: type === "Task" ? "rgba(0, 180, 255, .5)" : undefined }}
        >
          Task
        </div>

        <TimeInput
          hour={startHour}
          minute={startMinute}
          meridiem={startMeridiem}
          setHour={setStartHour}
          setMinute={setStartMinute}
          setMeridiem={setStartMeridiem}
        />

        <TimeInput
          hour={endHour}
          minute={endMinute}
          meridiem={endMeridiem}
          setHour={setEndHour}
          setMinute={setEndMinute}
          setMeridiem={setEndMeridiem}
        />

        <textarea
          className={styles.descriptionInput}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Add description"
        ></textarea>
        <button
          className={styles.createButton}
          onClick={() => {
            if (startHour === "" || startMinute === "" || endHour === "" || endMinute === "") {
              console.log("not valid");
              return;
            }
            const startTime = `${startHour}:${startMinute} ${startMeridiem}`;
            const endTime = `${endHour}:${endMinute} ${endMeridiem}`;
            console.log(date, title, startTime, endTime, description, color, "", type);
            setTaskDatabase(date, title, startTime, endTime, description, color, "", type);
          }}
        >
          <img className={styles.plus} src={plus} />
        </button>
        <select
          id="options"
          className={styles.colorSelect}
          onChange={(e) => setColor(e.target.value)}
        >
          <option value="Red">Red</option>
          <option value="Orange">Orange</option>
          <option value="Yellow">Yellow</option>
          <option value="Green">Green</option>
          <option value="Blue">Blue</option>
          <option value="Purple">Purple</option>
        </select>
      </div>
    );
  }
}
