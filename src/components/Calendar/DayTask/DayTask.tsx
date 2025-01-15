import { taskStore } from "../../../store"
import styles from './DayTask.module.css'

interface propsType {
  cellDate: string;
}


const colorMap: Record<string, React.CSSProperties> = {
  Red: {
    backgroundColor: "rgb(255, 0, 0)"
  },
  Orange: {
    backgroundColor: "rgb(255, 123, 0)"
  },
  Yellow: {
    backgroundColor: "rgb(247, 190, 39)"
  },
  Green: {
    backgroundColor: "rgb(0, 124, 37)"
  },
  Blue: {
    backgroundColor: "rgb(0, 180, 255)"
  },
  Purple: {
    backgroundColor: "rgb(138, 100, 226)"
  },
  
}

export default function DayTask(props: propsType) {

  const {taskDatabase} = taskStore();
  

  if (taskDatabase.has(props.cellDate)){
    const tasks = taskDatabase.get(props.cellDate)!;
      if (tasks.length < 5){
        return (
          
          <>
            {tasks.map((tasks, index) => (  
              
            <div key={index} className={styles.dayContentChildDiv} >
              <p className={styles.taskLabel} style={colorMap[tasks.color]}>{tasks.title}</p>
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
              <p className={styles.taskLabel} style={colorMap[tasks.color]}>{tasks.title}</p>
            </div>
            
            ))}

            <div  className={styles.dayContentChildDiv} >
              <p className={styles.overflowLabel} >{tasks.length - 3} more</p>
            </div>
          </>
        )
      }
  }

  
}
