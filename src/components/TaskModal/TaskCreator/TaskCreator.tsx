import styles from './TaskCreator.module.css'
import { taskStore } from '../../../store'
import plus from '../../.././assets/+.svg'

export default function TaskCreator() {

  const { title, date, dueTime, description, color, signup, admin, setTitle, setDueTime, setDescription, setColor, setTaskDatabase, setSignup } = taskStore();
  if (admin) {
    return (
      <div className={styles.taskCreatorDiv}>

        <input className={styles.titleInput} onChange={(e) => setTitle(e.target.value)} placeholder='title'></input>
        {/* <input className={styles.dueTimeInput} onChange={(e) => setDueTime(e.target.value)} placeholder='due time'></input> */}

        <div className={styles.timeDive}>
          <input className={styles.dueTimeInput} maxLength={2} onChange={(e) => setDueTime(e.target.value)}></input>

          <input className={styles.dueTimeInput} maxLength={2} onChange={(e) => setDueTime(e.target.value)}></input>

          <select id="options" className={styles.dueTimeInput} onChange={(e) => setColor(e.target.value)}>
            <option value="Red">
              AM
            </option>
            <option value="Orange">
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

        <textarea className={styles.descriptionInput} onChange={(e) => setDescription(e.target.value)} placeholder='description'></textarea>
        <button className={styles.createButton} onClick={() => { setTaskDatabase(date, title, dueTime, description, color, '', signup) }}>
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
