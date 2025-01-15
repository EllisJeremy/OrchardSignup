import styles from './Task.module.css'
import { taskStore } from '../../../store'

export default function TaskCreator() {

  const {date, taskDatabase} = taskStore();


  if (taskDatabase.has(date)){
    const tasks = taskDatabase.get(date)!;
    

      return (
        <>
          {tasks.map((tasks, index) => (  
            <div key={index} className={styles.taskCreatorDiv}>
          
            <p className={styles.title}>
              {tasks.title}
            </p>

            <p className={styles.dueTime}>
              {tasks.dueTime}
            </p>

            <p className={styles.description} >
              {tasks.description}
            </p>
            <button className={styles.selectButton}>
              <img className={styles.plus} src='/check.svg'/> 
            </button>
          
            </div>
            ))}
        </>

      )
    
  }


  
}
