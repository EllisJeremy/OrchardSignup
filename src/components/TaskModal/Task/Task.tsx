import styles from './Task.module.css'


export default function TaskCreator() {
  return (
    <div className={styles.taskCreatorDiv}>
      
      <input className={styles.titleInput} placeholder='title'></input>
      <input className={styles.dueTimeInput} placeholder='due time'></input>
      <textarea className={styles.descriptionInput} placeholder='description'></textarea>
      <button className={styles.createButton}>
        <img className={styles.plus} src='/check.svg'/> 
      </button>
      
      
    </div>
  )
}
