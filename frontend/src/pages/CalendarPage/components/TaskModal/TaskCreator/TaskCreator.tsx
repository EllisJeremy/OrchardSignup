import styles from "./TaskCreator.module.css";
import { taskStore } from "../../../calendarStore";
import plus from "../../../../../assets/+.svg";
import TimeInput from "./components/TimeInput";
import { formatHour, formatMinute } from "./components/timeFormat";

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
          placeholder="Add title"
        ></input>
        <div className={styles.typeContainerDiv}>
          <div
            className={styles.typeSlideOverDiv}
            style={{ left: type === "Task" ? "calc(50% + 5px)" : "0px" }}
          ></div>
          <div className={styles.typeDiv} onClick={() => setType("Event")}>
            Event
          </div>
          <div className={styles.typeDiv} onClick={() => setType("Task")}>
            Task
          </div>
        </div>

        {type === "Event" ? (
          <TimeInput
            hour={startHour}
            minute={startMinute}
            meridiem={startMeridiem}
            setHour={setStartHour}
            setMinute={setStartMinute}
            setMeridiem={setStartMeridiem}
          />
        ) : (
          <div></div>
        )}
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

        <select
          id="options"
          className={styles.colorSelect}
          onChange={(e) => setColor(e.target.value)}
        >
          <option value="">Anyone</option>
          <option value="example 1">example 1</option>
          <option value="example 2">example 2</option>
        </select>

        <button
          className={styles.createButton}
          onClick={() => {
            if (startHour === "" || startMinute === "" || endHour === "" || endMinute === "") {
              console.log("not valid");
              return;
            }
            const startTime = `${formatHour(startHour)}:${formatMinute(startMinute)} ${startMeridiem}`;
            const endTime = `${formatHour(endHour)}:${formatMinute(endMinute)} ${endMeridiem}`;
            console.log(date, title, startTime, endTime, description, color, "", type);
            setTaskDatabase(date, title, startTime, endTime, description, color, "", type);
          }}
        >
          Create
          <img className={styles.plus} src={plus} />
        </button>
      </div>
    );
  }
}
