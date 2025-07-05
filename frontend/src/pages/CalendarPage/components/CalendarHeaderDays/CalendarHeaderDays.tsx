import styles from './CalendarHeaderDays.module.css'

export default function CalendarHeader(){
  return(
      <div className={styles.daysDiv}>
        <div className={styles.dayDivSun}>
          SUN
        </div>
        <div className={styles.dayDiv}>
          MON
        </div>
        <div className={styles.dayDiv}>
          TUE
        </div>
        <div className={styles.dayDiv}>
          WED
        </div>
        <div className={styles.dayDiv}>
          THU
        </div>
        <div className={styles.dayDiv}>
          FRI
        </div>
        <div className={styles.dayDivSat}>
          SAT
        </div>
      </div>
  )
}