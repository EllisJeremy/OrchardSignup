import styles from "./Menu.module.css";
import calendarImg from 
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className={styles.bodyDiv}>
      <div className={styles.mainDiv}>
        <div className={styles.calendarDiv}>
          <div className={styles.calendarHeaderDiv}>
            <h2>Calendar</h2>
            <h3>View events and sign up for tasks</h3>
          </div>
          <div className={styles.calendarPictureDiv}>
            <img src={calendarImg}></img>
          </div>
        </div>

        <div className={styles.financeDiv}></div>
        <div className={styles.requestDiv}></div>
        <div className={styles.bylawsDiv}></div>
        <div className={styles.adminDiv}></div>
      </div>
    </div>
  );
}
