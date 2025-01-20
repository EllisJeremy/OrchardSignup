import styles from './Task.module.css'
import { taskStore } from '../../../store'
import trash from '../../.././assets/trash.svg'
import check from '../../.././assets/check.svg'


const colorMap: Record<string, React.CSSProperties> = {
  Red: {
    backgroundColor: "rgba(255, 0, 0, 0.5)",
    borderColor: "rgba(255, 0, 0, .0)"
  },
  Orange: {
    backgroundColor: "rgba(255, 123, 0, .5)",
    borderColor: "rgba(255, 123, 0, .0)"
  },
  Yellow: {
    backgroundColor: "rgba(247, 190, 39, .5)",
    borderColor: "rgba(247, 190, 39, .0)"
  },
  Green: {
    backgroundColor: "rgba(0, 124, 37, .5)",
    borderColor: "rgba(0, 124, 37, .0)"
  },
  Blue: {
    backgroundColor: "rgba(0, 180, 255, .5)",
    borderColor: "rgba(0, 180, 255, .0)"
  },
  Purple: {
    backgroundColor: "rgba(138, 100, 226, .5)",
    borderColor: "rgba(138, 100, 226, 0)"
  },
  
}

const adminTitle: React.CSSProperties = {gridColumn: "2 / span 2"}

export default function TaskCreator() {

  const {date, taskDatabase, admin, removeTask} = taskStore();


  if (taskDatabase.has(date)){
    const tasks = taskDatabase.get(date)!;
    
      if (admin){
        return (
          <>
            {tasks.map((tasks, index) => (  
              
              
              <div key={index} className={styles.taskCreatorDiv} >
                
              <button className={styles.trashButton} onClick={()=>(removeTask(date,index))}>
                <img className={styles.trash} src={trash}/> 
              </button>

              <p className={styles.title} style={{ ...colorMap[tasks.color], ...adminTitle }} >
                {tasks.title}
              </p>
              
              
              <p className={styles.dueTime}>
                {tasks.dueTime}
              </p>

              <p className={styles.description} >
                {tasks.description}
              </p>
              <button className={styles.selectButton}>
                <img className={styles.plus} src={check}/> 
              </button>
            
              </div>
              ))}
          </>
      

        )

      
      }

      else{
        return (
          <>
            {tasks.map((tasks, index) => (  
              <div key={index} className={styles.taskCreatorDiv} >
            
              <p className={styles.title} style={colorMap[tasks.color]}>
                {tasks.title}
              </p>

              <p className={styles.dueTime}>
                {tasks.dueTime}
              </p>

              <p className={styles.description} >
                {tasks.description}
              </p>
              <button className={styles.selectButton}>
                <img className={styles.plus} src={check}/> 
              </button>
            
              </div>
              ))}
          </>
      

        )

      
      }
    
  }


  
}
