import { taskStore } from "../../../store"
import styles from './DayTask.module.css'

interface propsType {
  cellDate: string;
}


const colorMap: Record<string, React.CSSProperties> = {
  Red: {
    backgroundColor: "rgba(255, 0, 0, .5)"
  },
  Orange: {
    backgroundColor: "rgba(255, 123, 0, .5)"
  },
  Yellow: {
    backgroundColor: "rgba(247, 190, 39, .5)"
  },
  Green: {
    backgroundColor: "rgba(39, 163, 76, .5)"
  },
  Blue: {
    backgroundColor: "rgba(0, 180, 255, .5)"
  },
  Purple: {
    backgroundColor: "rgba(149, 123, 211, .5)"
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
