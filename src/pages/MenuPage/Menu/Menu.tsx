import styles from "./Menu.module.css";
import calendarScreenshot from "../../../assets/calendarScreenshot.png";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className={styles.bodyDiv}>
      <div className={styles.mainDiv}>
        <div className={styles.calendarDiv}>
          <div className={styles.headerDiv}>
            <h2>Calendar</h2>
            <h3>View events and sign up for tasks</h3>
          </div>
          <div className={styles.calendarPictureDiv}>
            <img className={styles.calendarPicture} src={calendarScreenshot}></img>
          </div>
        </div>

        <div className={styles.financeDiv}>
          <div className={styles.headerDiv} style={{ justifyContent: "center" }}>
            <h2>Finances</h2>
            <h3></h3>
          </div>
          <div className={styles.financeContainerDiv}>
            <div className={styles.financeItemDiv}>
              <div className={styles.financeItemTitleDiv}>Financial Summary</div>
            </div>
            <div className={styles.financeItemDiv}>
              <div className={styles.financeItemTitleDiv}>Weekly Contributions Summary</div>
            </div>
            <div className={styles.financeItemDiv}>
              <div className={styles.financeItemTitleDiv}>Budget Status</div>
            </div>
          </div>
        </div>
        <div className={styles.requestDiv}>
          <div className={styles.headerDiv}>
            <h2 style={{ fontSize: "20px" }}>Requests</h2>
            <h3></h3>
          </div>
        </div>
        <div className={styles.bylawsDiv}>
          <div className={styles.headerDiv}>
            <h2 style={{ fontSize: "20px" }}>Bylaws</h2>
            <h3></h3>
          </div>
        </div>
        <div className={styles.adminDiv}>
          <div className={styles.headerDiv} style={{ justifyContent: "center" }}>
            <h2>Admin</h2>
            <h3></h3>
          </div>
          <div className={styles.adminContainerDiv}>
            <div className={styles.adminSplitDiv}>
              <div className={styles.adminItemLeftDiv}>
                <div className={styles.adminItemTitleDiv}>Financial Summary</div>
              </div>
              <div className={styles.adminItemLeftDiv}>
                <div className={styles.adminItemTitleDiv}>Weekly Contributions Summary</div>
              </div>
              <div className={styles.adminItemLeftDiv}>
                <div className={styles.adminItemTitleDiv}>Budget Status</div>
              </div>
            </div>
            <div className={styles.adminSplitDiv}>
              <div className={styles.adminItemRightDiv}>
                <div className={styles.adminItemTitleDiv}>Financial Summary</div>
              </div>
              <div className={styles.adminItemRightDiv}>
                <div className={styles.adminItemTitleDiv}>Weekly Contributions Summary</div>
              </div>
              <div className={styles.adminItemRightDiv}>
                <div className={styles.adminItemTitleDiv}>Budget Status</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
