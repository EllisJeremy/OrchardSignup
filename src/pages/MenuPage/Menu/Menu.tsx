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
        <Link to="/menu/calendar" className={styles.calendarDiv}>
          <div className={styles.headerDiv}>
            <h2>Calendar</h2>
            <img src={calendar} />
          </div>
          <div className={styles.calendarPictureDiv}>
            <img className={styles.calendarPicture} src={calendarScreenshot} alt="Calendar" />
          </div>
        </Link>

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
        <Link to="/menu/calendar" className={styles.messagesDiv}>
          <div className={styles.headerDiv}>
            <img src={all} />
            <h2>All Messages</h2>
          </div>
          <h3 style={{ textAlign: "right" }}>View past week's sermons</h3>
        </Link>

        <Link to="/menu/calendar" className={styles.messagesDiv}>
          <div className={styles.headerDiv}>
            <img src={clock} />
            <h2>Recent Message</h2>
          </div>
          <div className={styles.messagePictureDiv}>
            <img className={styles.calendarPicture} src={recentMessage} alt="Calendar" />
          </div>
        </Link>

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

        {/* Requests */}
        <Link to="/menu/calendar" className={styles.requestDiv}>
          <div className={styles.headerDiv}>
            <h2>Requests Disbursements</h2>
            <img src={refund} />
          </div>
          <h3>Get a refund for your donation</h3>
        </Link>

        {/* Bylaws */}
        <Link to="/menu/calendar" className={styles.bylawsDiv}>
          <div className={styles.headerDiv}>
            <h2>Bylaws</h2>
            <img src={scroll} />
          </div>
          <h3>View the rules of the church</h3>
        </Link>

        {/* Admin */}
        {admin && (
          <div className={styles.adminAuthDiv}>
            <h2>You do not have admin access</h2>
          </div>
        )}

        <div className={styles.adminDiv}>
          <div className={styles.headerDiv} style={{ justifyContent: "right" }}>
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
