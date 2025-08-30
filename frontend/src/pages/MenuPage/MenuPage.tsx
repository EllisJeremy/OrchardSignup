import styles from "./Menu.module.css";
import calendarScreenshot from "../../assets/calendarScreenshot.png";
import clock from "../../assets/clock.svg";
import logIn from "../../assets/logIn.svg";
import signUp from "../../assets/signUp.svg";
import dollar from "../../assets/dollar.svg";
import week from "../../assets/week.svg";
import paper from "../../assets/paper.svg";
import refund from "../../assets/refund.svg";
import handMoney from "../../assets/handMoney.svg";
import check from "../../assets/check.svg";
import review from "../../assets/review.svg";
import unlock from "../../assets/unlock.svg";
import paperStack from "../../assets/paperStack.svg";
import dollarBill from "../../assets/dollarBill.svg";
import calendar from "../../assets/calendar.svg";
import x from "../../assets/x.svg";
import scroll from "../../assets/scroll.svg";
import mag from "../../assets/mag.svg";

import { Link } from "react-router-dom";

const admin: boolean = true;
const guest: boolean = false;
let mostRecentMessage: string = "A Summer Series on James";
if (mostRecentMessage.length >= 30) {
  mostRecentMessage = mostRecentMessage.slice(0, 27) + "...";
}

export default function MenuPage() {
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
              <img
                className={styles.icon}
                src={calendar}
                style={{ height: "27px", marginLeft: "40px" }}
              />
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
                    <img className={styles.icon} src={logIn} />
                    <h2 style={{ fontSize: "20px" }}>Log In</h2>
                  </Link>
                  <Link to="/signUp" className={styles.accountItemDiv}>
                    <img className={styles.icon} src={signUp} />
                    <h2 style={{ fontSize: "20px" }}>Sign Up</h2>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/" className={styles.accountItemDiv}>
                    <img className={styles.icon} src={logIn} />
                    <h2 style={{ fontSize: "20px" }}>Log Out</h2>
                  </Link>
                  <Link to="/" className={styles.accountItemDiv}>
                    <img className={styles.icon} src={unlock} />
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
              <img className={styles.icon} src={paperStack} />
              <h2 style={{ fontSize: "20px" }}>All Messages</h2>
            </Link>
            <Link to="/menu/calendar" className={styles.messagesItemDiv}>
              <img className={styles.icon} src={clock} />
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
              <img className={styles.icon} src={dollar} />
            </Link>
            <Link to="/menu/calendar" className={styles.financeItemDiv}>
              <h2 style={{ fontSize: "20px" }}>Weekly Contributions</h2>
              <img className={styles.icon} src={week} />
            </Link>
            <Link to="/menu/calendar" className={styles.financeItemDiv}>
              <h2 style={{ fontSize: "20px" }}>Budget Status</h2>
              <img className={styles.icon} src={paper} />
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
              <img className={styles.icon} src={refund} />
            </Link>
            <Link to="/menu/calendar" className={styles.miscItemDiv}>
              <h2 style={{ fontSize: "20px" }}>Bylaws</h2>
              <img className={styles.icon} src={scroll} />
            </Link>
          </div>
        </div>

        {/* Admin */}
        {!admin && (
          <div className={styles.adminAuthDiv}>
            <div className={styles.authHeaderDiv}>
              <h2>Admin Access Required to Use</h2>
            </div>
            <div className={styles.ContainerDiv} style={{ paddingTop: "50px" }}>
              <img className={styles.icon} src={x} />
            </div>
          </div>
        )}

        <div className={styles.adminDiv}>
          <div className={styles.headerDiv} style={{ textAlign: "right" }}>
            <h2>Admin</h2>
          </div>
          <div className={styles.ContainerDiv}>
            <Link to="/menu/calendar" className={styles.adminItemDiv}>
              <img className={styles.icon} src={mag} />
              View Contributions
            </Link>
            <Link to="/menu/calendar" className={styles.adminItemDiv}>
              <img className={styles.icon} src={check} />
              Approve Disbursements
            </Link>
            <Link to="/menu/calendar" className={styles.adminItemDiv}>
              <img className={styles.icon} src={handMoney} />
              Pay Disbursements
            </Link>
            <Link to="/menu/calendar" className={styles.adminItemDiv}>
              <img className={styles.icon} src={review} />
              Review Disbursements
            </Link>
            <Link to="/menu/calendar" className={styles.adminItemDiv}>
              <img className={styles.icon} src={dollarBill} />
              Review Payments
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
