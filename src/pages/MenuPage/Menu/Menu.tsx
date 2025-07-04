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
import unlock from "../../../assets/unlock.svg";
import paperStack from "../../../assets/paperStack.svg";
import dollarBill from "../../../assets/dollarBill.svg";
import calendar from "../../../assets/calendar.svg";

import scroll from "../../../assets/scroll.svg";
import mag from "../../../assets/mag.svg";

import recentMessage from "../../../assets/recentMessage.jpg";

import { Link } from "react-router-dom";

const admin: boolean = false;
const guest: boolean = false;
let mostRecentMessage: string = "A Summer Series on James";
if (mostRecentMessage.length >= 30) {
  mostRecentMessage = mostRecentMessage.slice(0, 27) + "...";
}

export default function Menu() {
  return (
    <div className={styles.bodyDiv}>
      <div className={styles.mainDiv}>
        {/* Calendar */}
        <div className={styles.calendarDiv}>
          <div className={styles.headerDiv}>
            <h2>Events and Tasks</h2>
          </div>

          <div className={styles.calendarImageDiv}>
            <div className={styles.calendarHeaderDiv}>
              <h2>Calendar</h2>
              <img src={calendar} style={{ height: "27px", marginLeft: "40px" }} />
            </div>
            <Link to="/menu/calendar">
              <img className={styles.calendarImage} src={calendarScreenshot} alt="Calendar" />
            </Link>
          </div>
        </div>

        {/* Log in / Sign up */}

        <div className={styles.accountDiv}>
          <div className={styles.headerDiv}>
            <h2 style={{ textAlign: "right", marginBottom: "20px" }}>Account</h2>
          </div>

          <div className={styles.ContainerDiv} style={{ height: "calc(100% - 50px)" }}>
            {
              // if a user is a guest give these options
              guest ? (
                <>
                  <Link to="/" className={styles.accountItemDiv}>
                    <img src={logIn} style={{ height: "50%" }} />
                    <h2 style={{ fontSize: "20px" }}>Log In</h2>
                  </Link>
                  <Link to="/signUp" className={styles.accountItemDiv}>
                    <img src={signUp} style={{ height: "50%" }} />
                    <h2 style={{ fontSize: "20px" }}>Sign Up</h2>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/" className={styles.accountItemDiv}>
                    <img src={logIn} style={{ height: "50%" }} />
                    <h2 style={{ fontSize: "20px" }}>Log Out</h2>
                  </Link>
                  <Link to="/" className={styles.accountItemDiv}>
                    <img src={unlock} style={{ height: "60%" }} />
                    <h2 style={{ fontSize: "20px" }}>Request Admin</h2>
                  </Link>
                </>
              )
            }
          </div>
        </div>

        {/* Messages */}

        <div className={styles.messagesDiv} style={{ textAlign: "right" }}>
          <div className={styles.headerDiv}>
            <h2>Messages</h2>
          </div>
          <div className={styles.ContainerDiv} style={{ height: "calc(100% - 50px)" }}>
            <Link to="/menu/calendar" className={styles.messagesItemDiv}>
              <img src={paperStack} style={{ height: "40%" }} />
              <h2 style={{ fontSize: "20px" }}>All Messages</h2>
            </Link>
            <Link to="/menu/calendar" className={styles.messagesItemDiv}>
              <img src={clock} style={{ height: "40%" }} />
              <div className={styles.doubleHeaderDiv}>
                <h2 style={{ fontSize: "20px" }}>Recent Message</h2>
                <h2 style={{ fontSize: "15px" }}>{mostRecentMessage}</h2>
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
              <img src={mag} style={{ height: "80%" }} />
              View Contributions
            </Link>
            <Link to="/menu/calendar" className={styles.adminItemDiv}>
              <img src={check} style={{ height: "80%" }} />
              Approve Disbursements
            </Link>
            <Link to="/menu/calendar" className={styles.adminItemDiv}>
              <img src={handMoney} style={{ height: "80%" }} />
              Pay Disbursements
            </Link>
            <Link to="/menu/calendar" className={styles.adminItemDiv}>
              <img src={review} style={{ height: "80%" }} />
              Review Disbursements
            </Link>
            <Link to="/menu/calendar" className={styles.adminItemDiv}>
              <img src={dollarBill} style={{ height: "80%" }} />
              Review Payments
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
