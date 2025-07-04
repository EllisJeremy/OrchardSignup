import styles from "./Menu.module.css";
import calendarScreenshot from "../../../assets/calendarScreenshot.png";
import clock from "../../../assets/clock.svg";
import all from "../../../assets/all.svg";

import logIn from "../../../assets/logIn.svg";
import signUp from "../../../assets/signUp.svg";
import dollar from "../../../assets/dollar.svg";
import week from "../../../assets/week.svg";
import paper from "../../../assets/paper.svg";
import refund from "../../../assets/refund.svg";
import handMoney from "../../../assets/handMoney.svg";
import check from "../../../assets/check.svg";
import review from "../../../assets/review.svg";
import review2 from "../../../assets/review2.svg";

import scroll from "../../../assets/scroll.svg";
import calendar from "../../../assets/calendar.svg";

import recentMessage from "../../../assets/recentMessage.jpg";

import { Link } from "react-router-dom";

const admin: boolean = false;

export default function Menu() {
  return (
    <div className={styles.bodyDiv}>
      <div className={styles.mainDiv}>
        {/* Calendar */}
        <div className={styles.calendarDiv}>
          <div className={styles.headerDiv}>
            <h2>Calendar</h2>
          </div>

          <div className={styles.calendarImageDiv}>
            <img className={styles.calendarImage} src={calendarScreenshot} alt="Calendar" />
          </div>
        </div>

        {/* Log in / Sign up */}
        <div className={styles.accountContainerDiv}>
          <Link to="/" className={styles.accountDiv}>
            <div className={styles.headerDiv}>
              <img src={logIn} />
              <h2>Log in</h2>
            </div>
          </Link>
          <Link to="/signup" className={styles.accountDiv}>
            <div className={styles.headerDiv}>
              <img src={signUp} />
              <h2>Sign up</h2>
            </div>
          </Link>
        </div>

        {/* Messages */}

        <div className={styles.messagesDiv} style={{ textAlign: "right" }}>
          <div className={styles.headerDiv}>
            <h2>Messages</h2>
          </div>
          <div className={styles.ContainerDiv} style={{ height: "calc(100% - 50px)" }}>
            <Link to="/menu/calendar" className={styles.messagesItemDiv}>
              <img src={all} style={{ height: "50%" }} />
              <h2 style={{ fontSize: "20px" }}>All Messages</h2>
            </Link>

            <Link to="/menu/calendar" className={styles.bigMessagesItemDiv}>
              <div className={styles.headerMessagesDiv}>
                <img src={clock} style={{ height: "50%" }} />
                <h2 style={{ fontSize: "20px" }}>Most Recent Message</h2>
              </div>

              <div className={styles.messageImageDiv}>
                <img className={styles.calendarImage} src={recentMessage} alt="Calendar" />
              </div>
            </Link>
          </div>
        </div>

        {/* Finance */}

        {/* Finance */}
        <div className={styles.financeDiv}>
          <div className={styles.headerDiv}>
            <h2>Finances</h2>
          </div>
          <div className={styles.ContainerDiv}>
            <Link to="/menu/calendar" className={styles.financeItemDiv}>
              <h2 style={{ fontSize: "20px" }}>Financial Summary</h2>
              <img src={dollar} style={{ height: "50%" }} />
            </Link>
            <Link to="/menu/calendar" className={styles.financeItemDiv}>
              <h2 style={{ fontSize: "20px" }}>Weekly Contributions</h2>
              <img src={week} style={{ height: "50%" }} />
            </Link>
            <Link to="/menu/calendar" className={styles.financeItemDiv}>
              <h2 style={{ fontSize: "20px" }}>Budget Status</h2>
              <img src={paper} style={{ height: "50%" }} />
            </Link>
          </div>
        </div>

        {/* Misc */}
        <div className={styles.miscDiv}>
          <div className={styles.headerDiv}>
            <h2>Miscellaneous</h2>
          </div>
          <div className={styles.ContainerDiv}>
            <Link to="/menu/calendar" className={styles.miscItemDiv}>
              <h2 style={{ fontSize: "20px" }}>Request Disbursements</h2>
              <img src={refund} style={{ height: "40%" }} />
            </Link>
            <Link to="/menu/calendar" className={styles.miscItemDiv}>
              <h2 style={{ fontSize: "20px" }}>Bylaws</h2>
              <img src={scroll} style={{ height: "40%" }} />
            </Link>
          </div>
        </div>

        {/* Admin */}
        {admin && (
          <div className={styles.adminAuthDiv}>
            <h2>You do not have admin access</h2>
          </div>
        )}

        <div className={styles.adminDiv}>
          <div className={styles.headerDiv} style={{ textAlign: "right" }}>
            <h2>Admin</h2>
          </div>
          <div className={styles.ContainerDiv}>
            <Link to="/menu/calendar" className={styles.adminItemDiv}>
              <img src={refund} style={{ height: "60%" }} />
              View Contributions
            </Link>
            <Link to="/menu/calendar" className={styles.adminItemDiv}>
              <img src={check} style={{ height: "60%" }} />
              Approve Disbursements
            </Link>
            <Link to="/menu/calendar" className={styles.adminItemDiv}>
              <img src={handMoney} style={{ height: "60%" }} />
              Pay Disbursements
            </Link>
            <Link to="/menu/calendar" className={styles.adminItemDiv}>
              <img src={review} style={{ height: "60%" }} />
              Review Disbursements
            </Link>
            <Link to="/menu/calendar" className={styles.adminItemDiv}>
              <img src={review2} style={{ height: "60%" }} />
              Review Payments
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
