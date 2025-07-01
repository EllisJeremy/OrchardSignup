import styles from "./Menu.module.css";
import calendarScreenshot from "../../../assets/calendarScreenshot.png";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className={styles.bodyDiv}>
      <div className={styles.mainDiv}>
        {/* Calendar */}
        <div className={styles.calendarDiv}>
          <div className={styles.headerDiv}>
            <h2>Calendar</h2>
            <h3>View events and sign up for tasks</h3>
          </div>
          <div className={styles.calendarPictureDiv}>
            <img className={styles.calendarPicture} src={calendarScreenshot} alt="Calendar" />
          </div>
        </div>

        {/* log in */}
        <div className={styles.accountContainerDiv}>
          <div className={styles.accountDiv}>
            <div className={styles.headerDiv}>
              <h2 style={{ fontSize: "20px" }}>Log in</h2>
              <h3></h3>
            </div>
          </div>
          <div className={styles.accountDiv}>
            <div className={styles.headerDiv}>
              <h2 style={{ fontSize: "20px" }}>Sign up</h2>
              <h3></h3>
            </div>
          </div>
        </div>

        {/* Purple / Messages */}
        <div className={styles.messagesDiv}>
          <div className={styles.messagesItem1Div}>
            <div className={styles.financeItemTitleDiv}>Past Message</div>
          </div>
          <div className={styles.messagesItem2Div}>
            <div className={styles.financeItemTitleDiv}>Most Recent Message</div>
          </div>
        </div>

        {/* Finance */}
        <div className={styles.financeDiv}>
          <div className={styles.headerDiv}>
            <h2>Finances</h2>
            <h3></h3>
          </div>
          <div className={styles.ContainerDiv}>
            <div className={styles.financeItemDiv}>
              <div className={styles.financeItemTitleDiv}>Financial Summary</div>
            </div>
            <div className={styles.financeItemDiv}>
              <div className={styles.financeItemTitleDiv}>Weekly Contributions</div>
            </div>
            <div className={styles.financeItemDiv}>
              <div className={styles.financeItemTitleDiv}>Budget Status</div>
            </div>
          </div>
        </div>

        {/* Requests */}
        <div className={styles.requestDiv}>
          <div className={styles.headerDiv}>
            <h2 style={{ fontSize: "20px" }}>Requests Disbursements</h2>
            <h3></h3>
          </div>
        </div>

        {/* Bylaws */}
        <div className={styles.bylawsDiv}>
          <div className={styles.headerDiv}>
            <h2 style={{ fontSize: "20px" }}>Bylaws</h2>
            <h3></h3>
          </div>
        </div>

        {/* Admin */}
        <div className={styles.adminDiv}>
          <div className={styles.headerDiv} style={{ justifyContent: "right" }}>
            <h2>Admin</h2>
            <h3></h3>
          </div>
          <div className={styles.ContainerDiv}>
            <div className={styles.adminItemDiv}>View Contributions</div>
            <div className={styles.adminItemDiv}>Approve Disbursements</div>
            <div className={styles.adminItemDiv}>Pay Disbursements</div>
            <div className={styles.adminItemDiv}>Review Disbursements</div>
            <div className={styles.adminItemDiv}>Review Payments</div>
          </div>
        </div>
      </div>
    </div>
  );
}
