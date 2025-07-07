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
    signup,
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
    setSignup,
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

        <div className={styles.signupDiv}>
          signup:
          <label className={styles.switch} onChange={setSignup}>
            <input type="checkbox" />
            <span className={styles.slider}></span>
          </label>
        </div>
        <div className={styles.signupDiv}>
          signup:
          <label className={styles.switch} onChange={setSignup}>
            <input type="checkbox" />
            <span className={styles.slider}></span>
          </label>
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
          placeholder="description"
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
            console.log(date, title, startTime, endTime, description, color, "", signup);
            setTaskDatabase(date, title, startTime, endTime, description, color, "", signup);
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
