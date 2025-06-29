import styles from "./Menu.module.css";
import { Link } from "react-router-dom";
import map from "../../../assets/map.svg";
import writeCheck from "../../../assets/writeCheck.svg";
import bank from "../../../assets/bank.svg";

export default function Menu() {
  return (
    <div className={styles.bodyDiv}>
      <div className={styles.mainDiv}>
        <div className={styles.sectionDiv}>
          <div className={styles.gridDiv}>
            <div className={styles.tile}>
              <>
                <h2 className={styles.title}>Reference Material</h2>
                <img className={styles.logo} src={map} />
              </>
            </div>
            <Link className={styles.tile} to="/Menu/Calendar">
              Calendar
            </Link>
          </div>
        </div>
        <div className={styles.sectionDiv}>
          <div className={styles.headerDiv}>
            <h2 className={styles.title}>Treasurer's report</h2>
            <img className={styles.logo} src={bank} />
          </div>
          <div className={styles.gridDiv}>
            <div className={styles.tile}></div>
            <Link className={styles.tile} to="/Menu/Calendar">
              Calendar
            </Link>
          </div>
        </div>

        <div className={styles.sectionDiv}>
          <div className={styles.headerDiv}>
            <h2 className={styles.title}>Financial Management</h2>
            <img className={styles.logo} src={writeCheck} />
          </div>

          <div className={styles.gridDiv}>
            <div className={styles.tile}></div>
            <Link className={styles.tile} to="/Menu/Calendar">
              Calendar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
