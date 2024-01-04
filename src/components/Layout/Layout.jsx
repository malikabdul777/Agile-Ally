// React

// Thirdparty
import moment from "moment/moment";
import { BiSearch } from "react-icons/bi";
import { Navigate, Outlet, useLocation } from "react-router-dom";

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
  const { pathname } = useLocation();

  return (
    <div className={styles.container}>
      <Sidebar />
      {/* `` */}
      {/* making dashboard the default route */}
      {pathname === "/" && <Navigate to="/dashboard" />}
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
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
