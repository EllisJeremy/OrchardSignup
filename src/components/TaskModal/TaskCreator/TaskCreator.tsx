import styles from './TaskCreator.module.css'
import { taskStore } from '../../../store'
import plus from '../../.././assets/+.svg'
import { formatHour, formatMinute } from './TimeFormatter'
import { useRef } from 'react';


export default function TaskCreator() {
  const { title, date, dueTime, description, color, signup, admin, setTitle, setMeridiem, setDueTime, setDescription, setColor, setTaskDatabase, setSignup } = taskStore();
  const minuteInputRef = useRef<HTMLInputElement>(null);
  const hourInputRef = useRef<HTMLInputElement>(null);


  if (admin) {
    return (
      <div className={styles.taskCreatorDiv}>

        <input className={styles.titleInput} onChange={(e) => setTitle(e.target.value)} placeholder='title'></input>

        <div className={styles.timeDiv}>
          <input
            ref={hourInputRef}
            className={styles.hourInput}
            inputMode="numeric"
            maxLength={2}
            onChange={(e) => {
              const val = e.target.value;

              formatHour(val);

              const digits = val.replace(/\D/g, '');
              const firstDigit = parseInt(digits[0]);

              // move to minute if hours is valid
              if ((digits.length === 1 && firstDigit >= 3) || digits.length === 2) {
                minuteInputRef.current?.focus();
              }
            }}

          />



          <input
            ref={minuteInputRef}
            className={styles.minuteInput}
            inputMode="numeric"
            maxLength={2}
            onChange={(e) => formatMinute(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Backspace' && e.currentTarget.value.length === 0) {
                hourInputRef.current?.focus();
              }
            }}
          />



          <select id="options" className={styles.meridiem} onChange={(e) => { setMeridiem(e.target.value); setDueTime() }}>
            <option value="AM">
              AM
            </option>
            <option value="PM">
              PM
            </option>
          </select>

        </div>

        <div className={styles.signupDiv}>signup:
          <label className={styles.switch} onChange={setSignup}>
            <input type="checkbox" />
            <span className={styles.slider}></span>
          </label>
        </div>

        <textarea className={styles.descriptionInput} onChange={(e) => setDescription(e.target.value)} placeholder="description"></textarea>
        <button className={styles.createButton} onClick={() => { { setDueTime(); setTaskDatabase(date, title, dueTime, description, color, '', signup) } }}>
          <img className={styles.plus} src={plus} />
        </button>
        <select id="options" className={styles.colorSelect} onChange={(e) => setColor(e.target.value)}>
          <option value="Red">
            Red
          </option>
          <option value="Orange">
            Orange
          </option>
          <option value="Yellow">
            Yellow
          </option>
          <option value="Green">
            Green
          </option>
          <option value="Blue">
            Blue
          </option>
          <option value="Purple">
            Purple
          </option>

        </select>

      </div>
    )
  }
}
