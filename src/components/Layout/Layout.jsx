// React

// Thirdparty
import moment from "moment/moment";
import { BiSearch } from "react-icons/bi";

// Utils

// APISlices

// Slice

// CustomHooks

// Components
import Sidebar from "../Sidebar/Sidebar";

// Constants

// Enums

// Interfaces

// Styles
import styles from "./Layout.module.css";

// Local enums

// Local constants

// Local Interfaces

const Layout = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.dashboard}>
        <div className={styles.header}>
          <span>{moment().format("dddd, Do MMM YYYY")}</span>

          <div className={styles.searchBar}>
            <BiSearch size={20} />
            <input type="text" placeholder="Search" />
          </div>

          <div className={styles.profile}>
            <img src="./profile.png" alt="profile image" />
            <div className={styles.details}>
              <span>Abdul Malik</span>
              <span>abdulmalikshaikcad@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
