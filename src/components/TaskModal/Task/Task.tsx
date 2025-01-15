import styles from './Task.module.css'
import { taskStore } from '../../../store'

export default function TaskCreator() {

  const {date} = taskStore();

  return (
    <div className={styles.taskCreatorDiv}>
      
      <p className={styles.title}>
        {title}
      </p>

      <p className={styles.dueTime}>
        {dueTime}
      </p>

      <p className={styles.description} >
        {description}
      </p>
      <button className={styles.selectButton}>
        <img className={styles.plus} src='/check.svg'/> 
      </button>
      
      
    </div>
  )
}
