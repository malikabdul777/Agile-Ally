// React

// Thirdparty
import { BsArrowUpShort } from "react-icons/bs";

// Utils

// APISlices

// Slice

// CustomHooks

// Components
import StatisticsChart from "../StatisticsChart/StatisticsChart";

// Constants

// Enums

// Interfaces

// Styles
import styles from "./Statistics.module.css";
import { groupNumber } from "../../data";

// Local enums

// Local constants

// Local Interfaces

const Statistics = () => {
  return (
    <div className={`${styles.container} theme-container`}>
      <span className={styles.title}>Overview Statistics</span>

      <div className={`${styles.cards} grey-container`}>
        <div>
          <div className={styles.arrowIcon}>
            <BsArrowUpShort />
          </div>

          <div className={styles.card}>
            <span>Top Item this month</span>
            <span>Office comps</span>
          </div>
        </div>
        <div className={styles.card}>
          <span>Items </span>
          <span>${groupNumber(455)}</span>
        </div>
        <div className={styles.card}>
          <span>Profit </span>
          <span>${groupNumber(370000)}</span>
        </div>
        <div className={styles.card}>
          <span>Daily Average</span>
          <span>${groupNumber(2000)}</span>
        </div>
      </div>

      <StatisticsChart />
    </div>
  );
};

export default Statistics;
