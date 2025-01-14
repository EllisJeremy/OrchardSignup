import styles from './Calendar.module.css'
import {getStartingDay, getEndingDay, getDaysInMonth} from './calendarFunctions'
import { dateStore, modalStore, taskStore } from '../../store'

export default function Calendar(){

  //manual way of setting date 
  /*const daysInMonth: number = 31;
  const year: number = 2025;
  const month: number = 1;*/

  //automatic way of setting date
  const { month, year, setCurrentDay} = dateStore();
  const daysInMonth: number = getDaysInMonth(year, month,)

  const {openCloseTaskModal} = modalStore();
  const {setDate} = taskStore();
  
  return(
    <div className={styles.calendarDiv}>

      {/*create blank cells to ensure the first real day is on the correct day of the week */}
      {Array.from({ length: getStartingDay(month, year) }, (_, i) => (
        <div className={styles.dayDivBlank} key={"blank" + i}>
            
        </div>
      ))}


      {/*create all the cells for each day of the month */}
      {Array.from({ length: daysInMonth }, (_, i) => (
        <div 
        className={styles.dayDiv} 
        key={month.toString()+ "/" + (i + 1) + "/" + year.toString()} 
        onClick={() => {openCloseTaskModal(); setCurrentDay(i+1); setDate(month.toString()+ "/" + (i + 1) + "/" + year.toString())}}
        >
          
          
          <div className={styles.dayNumberDiv}>
           {i + 1} 
          </ div>
          
          
          
          

          
           
        </div>
      ))}

      {/*create blank cells to fill the extra slots and the end */}
      {Array.from({ length: getEndingDay(getStartingDay(month, year), daysInMonth) }, (_, i) => (
        <div className={styles.dayDivBlank} key={"blank" + i}>
            
        </div>
      ))}



      


       

    </div>
  )
}