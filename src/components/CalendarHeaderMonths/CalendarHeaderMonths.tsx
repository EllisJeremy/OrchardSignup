import styles from './CalendarHeaderMonths.module.css'
import { dateStore } from '../../store'
import monthToString from '../../globalTypescript/monthToString';


export default function CalendarHeader(){

  const {month, year, decrementMonth, incrementMonth} = dateStore();

  return(
      <div className={styles.monthsDiv}>

        <div className={styles.changeMonthDiv}>

          <button className={styles.buttonLeft} onClick={decrementMonth}>
            <img className={styles.arrow} src={'/arrowLeft.svg'}/> 
          </button>

          <p className={styles.monthText}>
            {monthToString(month)} {year}
          </p>

          <button className={styles.buttonRight} onClick={incrementMonth}>
            <img className={styles.arrow} src={'/arrowRight.svg'}/> 
          </button>

        </div>
          
        <div className={styles.logInDiv}>
          <button className={styles.buttonLogin}>
            login
          </button>
        </div>

      </div>
  )
}