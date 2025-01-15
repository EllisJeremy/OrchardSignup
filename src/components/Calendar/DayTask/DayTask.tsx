import { taskStore } from "../../../store"
import styles from './DayTask.module.css'

interface propsType {
  cellDate: string;
}

export default function DayTask(props: propsType) {

  const {taskDatabase} = taskStore();


  if (taskDatabase.has(props.cellDate)){
    const tasks = taskDatabase.get(props.cellDate)!;

      return (
        
        <>
          {tasks.map((tasks, index) => (  
          <div key={index} className={styles.dayContentChildDiv}>
            <p className={styles.taskLabel1}>{tasks.title}</p>
          </div>
          
          ))}
        </>
      )
  }

  
}
