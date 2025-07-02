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
            <img src={calendar}></img>
          </div>
          <div className={styles.calendarPictureDiv}>
            <img className={styles.calendarPicture} src={calendarScreenshot} alt="Calendar" />
          </div>
        </div>
        {/* log in */}
        <div className={styles.accountContainerDiv}>
          <div className={styles.accountDiv}>
            <div className={styles.headerDiv}>
              <img src={logIn}></img>
              <h2>Log in</h2>
            </div>
          </div>
          <div className={styles.accountDiv}>
            <div className={styles.headerDiv}>
              <img src={signUp}></img>
              <h2>Sign up</h2>
            </div>
          </div>
        </div>
        {/* Purple / Messages */}
        <div className={styles.messagesDiv}>
          <div className={styles.headerDiv}>
            <img src={all}></img>
            <h2>All Messages</h2>
          </div>
          <h3 style={{ textAlign: "right" }}> View past weeks sermons</h3>
        </div>
        <div className={styles.messagesDiv}>
          <div className={styles.headerDiv}>
            <img src={clock}></img>
            <h2>Recent Message</h2>
          </div>
          <div className={styles.messagePictureDiv}>
            <img className={styles.calendarPicture} src={recentMessage} alt="Calendar" />
          </div>
        </div>
        {/* Finance */}
        <div className={styles.financeDiv}>
          <div className={styles.headerDiv}>
            <h2>Finances</h2>
          </div>
          <div className={styles.ContainerDiv}>
            <div className={styles.financeItemDiv}>
              <h2 style={{ fontSize: "20px" }}>Financial Summary</h2>
              <img src={dollar} style={{ height: "50%" }}></img>
            </div>
            <div className={styles.financeItemDiv}>
              <h2 style={{ fontSize: "20px" }}>Weekly Contributions</h2>
              <img src={week} style={{ height: "50%" }}></img>
            </div>
            <div className={styles.financeItemDiv}>
              <h2 style={{ fontSize: "20px" }}>Budget Status</h2>
              <img src={paper} style={{ height: "50%" }}></img>
            </div>
          </div>
        </div>
        {/* Requests */}
        <div className={styles.requestDiv}>
          <div className={styles.headerDiv}>
            <h2>Requests Disbursements</h2>
            <img src={refund}></img>
          </div>
          <h3>Get a refund for your donation</h3>
        </div>
        {/* Bylaws */}
        <div className={styles.bylawsDiv}>
          <div className={styles.headerDiv}>
            <h2>Bylaws</h2>
            <img src={scroll}></img>
          </div>
          <h3>View the rules of the church</h3>
        </div>
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
            <div className={styles.adminItemDiv}>
              <img src={refund} style={{ height: "60%" }}></img>
              View Contributions
            </div>
            <div className={styles.adminItemDiv}>
              <img src={check} style={{ height: "60%" }}></img>
              Approve Disbursements
            </div>
            <div className={styles.adminItemDiv}>
              <img src={handMoney} style={{ height: "60%" }}></img>
              Pay Disbursements
            </div>
            <div className={styles.adminItemDiv}>
              <img src={review} style={{ height: "60%" }}></img>
              Review Disbursements
            </div>
            <div className={styles.adminItemDiv}>
              <img src={review2} style={{ height: "60%" }}></img>
              Review Payments
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
