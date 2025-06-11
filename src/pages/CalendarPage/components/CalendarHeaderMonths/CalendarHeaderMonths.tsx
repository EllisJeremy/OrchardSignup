import styles from './CalendarHeaderMonths.module.css'
import { dateStore, taskStore, modalStore } from '../../calendarStore'
import monthToString from '../../globalTypescript/monthToString';
import arrowLeft from '../.././assets/arrowLeft.svg'
import arrowRight from '../.././assets/arrowRight.svg'

export default function CalendarHeader() {

  const { setOwner } = taskStore();

  const { month, year, decrementMonth, incrementMonth } = dateStore();

  const { openCloseLoginModal } = modalStore();

  return (
    <div className={styles.monthsDiv}>

      <div className={styles.changeMonthDiv}>

        <button className={styles.buttonLeft} onClick={decrementMonth}>
          <img className={styles.arrow} src={arrowLeft} />
        </button>

        <p className={styles.monthText}>
          {monthToString(month)} {year}
        </p>

        <button className={styles.buttonRight} onClick={() => { incrementMonth(); setOwner('jeremy') }}>
          <img className={styles.arrow} src={arrowRight} />
        </button>

      </div>

      <div className={styles.logInDiv}>
        <button className={styles.buttonLogin} onClick={openCloseLoginModal}>
          Login
        </button>
      </div>

    </div>
  )
}