import styles from './Task.module.css'
import { taskStore } from '../../../store'


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

export default function TaskCreator() {

  const {date, taskDatabase} = taskStore();


  if (taskDatabase.has(date)){
    const tasks = taskDatabase.get(date)!;
    

      return (
        <>
          {tasks.map((tasks, index) => (  
            <div key={index} className={styles.taskCreatorDiv} style={colorMap[tasks.color]}>
          
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
