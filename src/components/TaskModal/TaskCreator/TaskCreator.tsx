import styles from './TaskCreator.module.css'
import { taskStore } from '../../../store'
import plus from '../../.././assets/+.svg'

export default function TaskCreator() {

  const {title, date, dueTime, description, color, admin, setTitle, setDueTime, setDescription, setColor, setTaskDatabase} = taskStore();
  if (admin){
    return (
      <div className={styles.taskCreatorDiv}>
        
        <input className={styles.titleInput} onChange={(e) => setTitle(e.target.value)} placeholder='title'></input>
        <input className={styles.dueTimeInput} onChange={(e) => setDueTime(e.target.value)} placeholder='due time'></input>

        <div className={styles.eventDiv}>event:
          <label className={styles.switch}>
            <input type="checkbox" />
            <span className={styles.slider}></span>
          </label>
        </div>

        <textarea className={styles.descriptionInput}  onChange={(e) => setDescription(e.target.value)} placeholder='description'></textarea>
        <button className={styles.createButton} onClick={() => {setTaskDatabase(date, title, dueTime, description, color,'')}}>
          <img className={styles.plus} src={plus}/>
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
