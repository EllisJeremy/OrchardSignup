import { Link } from "react-router-dom";
import styles from "./Menu.module.css";
import calendarScreenshot from "../../assets/calendarScreenshot.png";

export default function Menu() {
  return (
    <div className={styles.bodyDiv}>
      <div className={styles.mainDiv}>
        {/* Calendar */}
        <div className={`${styles.tileDiv} ${styles.calendarDiv}`}>
          <h2 className={styles.title}>Calendar</h2>
          <Link to="/menu/calendar">
            <img className={styles.calendarImg} src={calendarScreenshot} alt="Calendar" />
          </Link>
        </div>

        {/* Logout */}
        <div className={styles.tileDiv}>
          <h2 className={styles.title}>Logout</h2>
          <button className={styles.logoutButton}>Log Out</button>
        </div>

        {/* Legacy Links */}
        <div className={styles.tileDiv}>
          <h2 className={styles.title}>Looking for a Legacy Service?</h2>
          <div className={styles.legacyLinks}>
            <a href="https://247christianity.org/" target="_blank" rel="noreferrer">
              Legacy Page 1
            </a>
            <a href="https://247christianity.org/" target="_blank" rel="noreferrer">
              Legacy Page 2
            </a>
            <a href="https://247christianity.org/" target="_blank" rel="noreferrer">
              Legacy Page 3
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
