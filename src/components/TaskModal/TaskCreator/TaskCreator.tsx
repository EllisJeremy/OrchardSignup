import styles from './TaskCreator.module.css'


export default function TaskCreator() {
  return (
    <div className={styles.taskCreatorDiv}>
      
      <input className={styles.titleInput} placeholder='title'></input>
      <input className={styles.dueTimeInput} placeholder='due time'></input>

      <div className={styles.eventDiv}>event:
        <label className={styles.switch}>
          <input type="checkbox" />
          <span className={styles.slider}></span>
        </label>
      </div>

      <textarea className={styles.descriptionInput} placeholder='description'></textarea>
      <button className={styles.createButton}>
        <img className={styles.plus} src='/+.svg'/>
      </button>
      <select id="options" className={styles.colorSelect}>
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
