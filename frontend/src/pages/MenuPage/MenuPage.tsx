import { Link } from "react-router-dom";
import styles from "./Menu.module.css";
import calendarScreenshot from "../../assets/calendarScreenshot.png";
import logoutIcon from "../../assets/logIn.svg";
import { useAuthStore } from "../../globalStores/useAuthStore";

export default function Menu() {
  const { user } = useAuthStore();
  console.log(user);
  return (
    <div className={styles.bodyDiv}>
      <div className={styles.mainDiv}>
        {/* Top Bar */}
        <div className={styles.topBar}>
          <h1 className={styles.titleLarge}>Welcome {user ? user.firstName : "Guest"}</h1>
          <button className={styles.logoutButtonTop}>
            <img src={logoutIcon} alt="Logout" className={styles.logoutIcon} />
          </button>
        </div>

        {/* Calendar (dominant tile) */}
        <div className={`${styles.tileDiv} ${styles.calendarDiv}`}>
          <h2 className={styles.title}>Calendar</h2>
          <Link to="/menu/calendar">
            <img className={styles.calendarImg} src={calendarScreenshot} alt="Calendar" />
          </Link>
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
