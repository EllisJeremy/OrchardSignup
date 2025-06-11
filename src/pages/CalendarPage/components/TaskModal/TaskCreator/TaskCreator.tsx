import styles from './TaskCreator.module.css'
import { taskStore } from '../../../calendarStore'
import plus from '../../.././assets/+.svg'
import { formatHour, formatMinute } from './TimeFormatter'
import { useRef } from 'react';


export default function TaskCreator() {
  const { title, date, description, color, signup, admin, setTitle, setMeridiem, setDescription, setColor, setTaskDatabase, setSignup } = taskStore();
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
            onKeyDown={(e) => {
              const allowedKeys = ['Backspace', 'Tab', 'ArrowLeft', 'ArrowRight'];
              const isDigit = /^[0-9]$/.test(e.key);
              const current = e.currentTarget.value;

              if (!isDigit && !allowedKeys.includes(e.key)) {
                e.preventDefault();
                return;
              }

              if (isDigit) {
                const next = (current + e.key).slice(0, 2);
                if (next.length === 2) {
                  const num = parseInt(next, 10);
                  if (num < 1 || num > 12) {
                    e.preventDefault();
                  }
                }
              }
            }}

            onChange={(e) => {
              const val = e.target.value.replace(/\D/g, '').slice(0, 2);
              formatHour(val);

              // Auto-advance rules
              if (val.length === 2 || (val.length === 1 && parseInt(val) >= 3)) {
                minuteInputRef.current?.focus();
              }
            }}
          />





          <input
            ref={minuteInputRef}
            className={styles.minuteInput}
            inputMode="numeric"
            maxLength={2}
            onKeyDown={(e) => {
              const allowedKeys = ['Backspace', 'Tab', 'ArrowLeft', 'ArrowRight'];
              const isDigit = /^[0-9]$/.test(e.key);
              const current = e.currentTarget.value;

              // Move focus back to hour if backspacing from empty field
              if (e.key === 'Backspace' && current.length === 0) {
                hourInputRef.current?.focus();
                return;
              }

              if (!isDigit && !allowedKeys.includes(e.key)) {
                e.preventDefault();
                return;
              }

              if (isDigit) {
                const next = (current + e.key).slice(0, 2);
                const num = parseInt(next, 10);
                if (num > 59) {
                  e.preventDefault();
                }
              }
            }}
            onChange={(e) => {
              const val = e.target.value.replace(/\D/g, '');
              formatMinute(val);
            }}
          />





          <select id="options" className={styles.meridiem} onChange={(e) => setMeridiem(e.target.value)}>
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
        <button
          className={styles.createButton}
          onClick={() => {
            const { hour = '12', minute = '00', meridiem = 'AM' } = taskStore.getState();
            const dueTime = `${hour}:${minute} ${meridiem}`;
            setTaskDatabase(date, title, dueTime, description, color, '', signup);
          }}
        >
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
