import styles from "./Menu.module.css";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.loginDiv}>
        <div className={styles.headerDiv}>
          <img className={styles.orchardLogo} />
        </div>

        <button className={styles.loginButton} type="submit">
          Sign up
        </button>
      </div>

      <div className={styles.signupDiv}>
        <Link className={styles.loginButton} to="/Menu/Calendar">
          Calendar
        </Link>
      </div>
    </div>
  );
}
