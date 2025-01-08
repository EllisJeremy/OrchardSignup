import styles from './Calendar.module.css'
import {getStartingDay, getEndingDay, getDaysInMonth} from './calendarFunctions'

export default function Calendar(){

  //manual way of setting date 
  /*const daysInMonth: number = 31;
  const year: number = 2025;
  const month: number = 1;*/

  //automatic way of setting date
  const now = new Date();
  const year: number = now.getFullYear();
  const month = now.getMonth() + 1;
  const daysInMonth: number = getDaysInMonth(year, month)

  
  return(
    <div className={styles.calendarDiv}>

      {/*create blank cells to ensure the first real day is on the correct day of the week */}
      {Array.from({ length: getStartingDay(month, year) }, (_, i) => (
        <div className={styles.dayDiv} key={"blank" + i}>
            
        </div>
      ))}


      {/*create all the cells for each day of the month */}
      {Array.from({ length: daysInMonth }, (_, i) => (
        <div className={styles.dayDiv} key={"day" + i} >
          <div className={styles.dayNumberDiv}>
           {i + 1}
          </ div>
          <div className={styles.dayContentDiv}>
            <div className={styles.dayContentChildDiv}>
              <p className={styles.taskLabel1}>task 1</p>
            </div>
            <div className={styles.dayContentChildDiv}>
              <p className={styles.taskLabel2}>task 2</p>
            </div>
          </div>  
        </div>
      ))}

      {/*create blank cells to fill the extra slots and the end */}
      {Array.from({ length: getEndingDay(getStartingDay(month, year), daysInMonth) }, (_, i) => (
        <div className={styles.dayDiv} key={"blank" + i}>
            
        </div>
      ))}



      


       

    </div>
  )
}