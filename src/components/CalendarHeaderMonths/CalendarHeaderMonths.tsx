import styles from './CalendarHeaderMonths.module.css'

export default function CalendarHeader(){
  return(
      <div className={styles.monthsDiv}>

        <div className={styles.changeMonthDiv}>

          <button className={styles.buttonLeft}>
            <img className={styles.arrow} src={'/arrowLeft.svg'}/> 
          </button>

          <p className={styles.monthText}>
             January 2025 
          </p>

          <button className={styles.buttonRight}>
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