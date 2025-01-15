import { taskStore } from "../../../store"
import styles from './DayTask.module.css'

interface propsType {
  cellDate: string;
}

export default function DayTask(props: propsType) {

  const {taskDatabase} = taskStore();


  if (taskDatabase.has(props.cellDate)){
    const tasks = taskDatabase.get(props.cellDate)!;
      if (tasks.length < 5){
        return (
          
          <>
            {tasks.map((tasks, index) => (  
            <div key={index} className={styles.dayContentChildDiv}>
              <p className={styles.taskLabel}>{tasks.title}</p>
            </div>
            
            ))}
          </>
        )
      }

      if (tasks.length >= 5){
        return (
          
          <>
            {tasks.slice(0,3).map((tasks, index) => (  
            <div key={index} className={styles.dayContentChildDiv}>
              <p className={styles.taskLabel}>{tasks.title}</p>
            </div>
            
            ))}

            <div  className={styles.dayContentChildDiv}>
              <p className={styles.overflowLabel}>{tasks.length - 3} more</p>
            </div>
          </>
        )
      }
  }

  
}
