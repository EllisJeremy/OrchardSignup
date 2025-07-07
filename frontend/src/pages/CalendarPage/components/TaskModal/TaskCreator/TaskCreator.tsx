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
    hour,
    minute,
    meridiem,
    setTitle,
    setDescription,
    setColor,
    setTaskDatabase,
    setSignup,
    setHour,
    setMinute,
    setMeridiem,
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
          hour={hour}
          minute={minute}
          meridiem={meridiem}
          setHour={setHour}
          setMinute={setMinute}
          setMeridiem={setMeridiem}
        />

        <TimeInput
          hour={hour}
          minute={minute}
          meridiem={meridiem}
          setHour={setHour}
          setMinute={setMinute}
          setMeridiem={setMeridiem}
        />

        <textarea
          className={styles.descriptionInput}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="description"
        ></textarea>
        <button
          className={styles.createButton}
          onClick={() => {
            const { hour = "12", minute = "00", meridiem = "AM" } = taskStore.getState();
            const dueTime = `${hour}:${minute} ${meridiem}`;
            console.log(date, title, dueTime, description, color, "", signup);
            setTaskDatabase(date, title, dueTime, description, color, "", signup);
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
