import styles from "./CalendarHeaderMonths.module.css";
import { dateStore } from "../../calendarStore";
import monthToString from "../../functions/monthToString";
import arrowLeft from "../../../../assets/arrowLeft.svg";
import arrowRight from "../../../../assets/arrowRight.svg";

import { Link } from "react-router-dom";
import returnIcon from "../../../../assets/return.svg";

export default function CalendarHeader() {
  const { month, year, decrementMonth, incrementMonth } = dateStore();

  return (
    <div className={styles.monthsDiv}>
      <div className={styles.changeMonthDiv}>
        <button className={styles.buttonLeft} onClick={decrementMonth}>
          <img className={styles.arrow} src={arrowLeft} />
        </button>

        <p className={styles.monthText}>
          {monthToString(month)} {year}
        </p>

        <button
          className={styles.buttonRight}
          onClick={() => {
            incrementMonth();
          }}
        >
          <img className={styles.arrow} src={arrowRight} />
        </button>
      </div>

      <div className={styles.logInDiv}>
        <Link to="/menu" className={styles.buttonLogin}>
          <img src={returnIcon} />
          Menu
        </Link>
      </div>
    </div>
  );
}
