import styles from './Calendar.module.css'
import startingDay from '../startingDay'

export default function Calendar(){


  return(
    <div className={styles.calendarDiv}>

      {/*create blank cells to ensure the first real day is on the correct day of the week */}
      {Array.from({ length: startingDay(1, 2025) }, (_, i) => (
          <div key={"blank" + i}>
             
          </div>
        ))}


        {/*create all the cells for each day of the month */}
        {Array.from({ length: 31 }, (_, i) => (
          <div className={styles.dayDiv} key={"day" + i} >
            {i + 1}
          </div>
        ))}
      

       

    </div>
  )
}