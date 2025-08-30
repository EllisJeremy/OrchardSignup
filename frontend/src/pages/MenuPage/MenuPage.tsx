import { Link } from "react-router-dom";
import styles from "./Menu.module.css";
import calendarScreenshot from "../../assets/calendarScreenshot.png";
import logoutIcon from "../../assets/logIn.svg";
import { useAuthStore } from "../../globalStores/useAuthStore";
import { useNavigate } from "react-router-dom";
import paperStack from "../../assets/paperStack.svg";
import refund from "../../assets/refund.svg";
import scroll from "../../assets/scroll.svg";
import dollar from "../../assets/dollar.svg";
import week from "../../assets/week.svg";
import paper from "../../assets/paper.svg";

export default function Menu() {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const logOutOrIn = async () => {
    if (user) {
      await logout();
    }
    navigate("/");
  };
  return (
    <div className={styles.bodyDiv}>
      <div className={styles.mainDiv}>
        <div className={styles.topBar}>
          <h1 className={styles.titleLarge}>Welcome {user ? user.firstName : "Guest"}</h1>
          {user ? (
            <button className={styles.logoutButtonTop} onClick={logOutOrIn}>
              log out
              <img src={logoutIcon} alt="Logout" className={styles.logoutIcon} />
            </button>
          ) : (
            <button className={styles.logoutButtonTop} onClick={logOutOrIn}>
              log in
              <img src={logoutIcon} alt="Logout" className={styles.logoutIcon} />
            </button>
          )}
        </div>

        <div className={`${styles.tileDiv} ${styles.calendarDiv}`}>
          <h2 className={styles.title}>Calendar</h2>
          <Link to="/menu/calendar">
            <img className={styles.calendarImg} src={calendarScreenshot} alt="Calendar" />
          </Link>
        </div>

        <div className={styles.tileDiv}>
          <h2 className={styles.title}>Miscellaneous</h2>
          <div className={styles.legacyLinks}>
            <a href="https://247christianity.org/" target="_blank" rel="noreferrer">
              Messages
              <img src={paperStack} />
            </a>
            <a href="https://247christianity.org/" target="_blank" rel="noreferrer">
              Request Disbursements
              <img src={refund} />
            </a>
            <a
              href="https://www.247christianity.org/secure/forms/memberguide/Orchard%20Member%20Guide%20-%20Appendix%20A%20Constitution%20and%20Bylaws.pdf"
              target="_blank"
              rel="noreferrer"
            >
              ByLaws
              <img src={scroll} />
            </a>
          </div>
        </div>

        <div className={styles.tileDiv} style={{ backgroundColor: "#ffffffff" }}>
          <h2 className={styles.title}>Finances</h2>
          <div className={styles.legacyLinks}>
            <a href="https://247christianity.org/" target="_blank" rel="noreferrer">
              Financial Summary
              <img src={dollar} />
            </a>
            <a href="https://247christianity.org/" target="_blank" rel="noreferrer">
              Weekly Contributions
              <img src={week} />
            </a>
            <a href="https://247christianity.org/" target="_blank" rel="noreferrer">
              Budget Status
              <img src={paper} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
