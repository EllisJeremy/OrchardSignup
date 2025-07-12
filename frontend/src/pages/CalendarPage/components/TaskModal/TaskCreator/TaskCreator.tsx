import styles from "./TaskCreator.module.css";
import { taskStore } from "../../../calendarStore";
import plus from "../../../../../assets/+.svg";
import TimeInput from "./components/TimeInput";
import { to24Hour } from "./components/timeFormat";

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
    taskError,
    repeat,
    owner,
    taskDatabase,
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
    setTaskError,
    setRepeat,
    setOwner,
    resetTaskVariables,
  } = taskStore();

  if (admin) {
    return (
      <div className={styles.taskCreatorDiv}>
        <input
          className={styles.titleInput}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add title"
          value={title}
        ></input>
        <div className={styles.typeContainerDiv}>
          <div
            className={styles.typeSlideOverDiv}
            style={{ left: type === "task" ? "calc(50% + 5px)" : "0px" }}
          ></div>
          <div className={styles.typeDiv} onClick={() => setType("event")}>
            Event
          </div>
          <div className={styles.typeDiv} onClick={() => setType("task")}>
            Task
          </div>
        </div>

        <TimeInput
          hour={startHour}
          minute={startMinute}
          meridiem={startMeridiem}
          setHour={setStartHour}
          setMinute={setStartMinute}
          setMeridiem={setStartMeridiem}
        />

        {type === "event" ? (
          <TimeInput
            hour={endHour}
            minute={endMinute}
            meridiem={endMeridiem}
            setHour={setEndHour}
            setMinute={setEndMinute}
            setMeridiem={setEndMeridiem}
          />
        ) : (
          <select
            id="options"
            className={styles.colorSelect}
            onChange={(e) => setOwner(e.target.value)}
            value={owner}
          >
            <option value="">Anyone</option>
            <option value="john@gmail.com">John Smith</option>
            <option value="doug@theorchardchurch.net">Doug Ellis</option>
          </select>
        )}
        <textarea
          className={styles.descriptionInput}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Add description"
          value={description}
        ></textarea>

        <select
          id="options"
          className={styles.colorSelect}
          onChange={(e) => setRepeat(e.target.value)}
          value={repeat}
        >
          <option value="none">No repeat</option>
          <option value="weekly">Repeat weekly</option>
        </select>

        <select
          id="options"
          className={styles.colorSelect}
          onChange={(e) => setColor(e.target.value)}
          value={color}
        >
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="purple">Purple</option>
        </select>

        <div className={styles.taskErrorDiv}>{taskError}</div>

        <button
          className={styles.createButton}
          onClick={() => {
            console.log(taskDatabase);
            if (
              isNaN(parseInt(startHour)) ||
              isNaN(parseInt(startMinute)) ||
              parseInt(startHour) < 1 ||
              parseInt(startHour) > 12 ||
              parseInt(startMinute) < 0 ||
              parseInt(startMinute) > 59
            ) {
              if (type === "event") {
                setTaskError("Enter a valid start time");
              } else {
                setTaskError("Enter a valid due time");
              }
              return;
            }
            if (
              type === "event" &&
              (isNaN(parseInt(endHour)) ||
                isNaN(parseInt(endMinute)) ||
                parseInt(endHour) < 1 ||
                parseInt(endHour) > 12 ||
                parseInt(endMinute) < 0 ||
                parseInt(endMinute) > 59)
            ) {
              setTaskError("Enter a valid end time");
              return;
            }

            setTaskError("");
            const startTime = to24Hour(startHour, startMinute, startMeridiem);
            const endTimeOrNull =
              type === "event" ? to24Hour(endHour, endMinute, endMeridiem) : null;
            const ownerOrNull = type === "task" && owner !== "" ? owner : null;
            const repeatOrNull = repeat !== "none" ? repeat : null;

            setTaskDatabase(
              date,
              title,
              startTime,
              endTimeOrNull,
              description,
              color,
              ownerOrNull,
              type,
              repeatOrNull,
            );
            resetTaskVariables();
          }}
        >
          Create
          <img className={styles.plus} src={plus} />
        </button>
      </div>
    );
  }
}
