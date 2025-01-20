import styles from './CalendarHeaderMonths.module.css'
import { dateStore } from '../../store'
import monthToString from '../../globalTypescript/monthToString';
import { taskStore } from '../../store';
import arrowLeft from '../.././assets/arrowLeft.svg'
import arrowRight from '../.././assets/arrowRight.svg'

export default function CalendarHeader(){

  const {setAdmin} = taskStore();

  const {month, year, decrementMonth, incrementMonth} = dateStore();

  return(
      <div className={styles.monthsDiv}>

        <div className={styles.changeMonthDiv}>

          <button className={styles.buttonLeft} onClick={decrementMonth}>
            <img className={styles.arrow} src={arrowLeft}/> 
          </button>

          <p className={styles.monthText}>
            {monthToString(month)} {year}
          </p>

          <button className={styles.buttonRight} onClick={incrementMonth}>
            <img className={styles.arrow} src={arrowRight}/> 
          </button>

        </div>
          
        <div className={styles.logInDiv}>
          <button className={styles.buttonLogin} onClick={setAdmin}>
            Toggle Admin
          </button>
        </div>

      </div>
  )
}