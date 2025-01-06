import styles from './CalendarHeader.module.css'

export default function CalendarHeader(){
  return(
    <>
      <div className={styles.months}>
        months
      </div>
      <div className={styles.days}>
        days
      </div>
    </>
  )
}