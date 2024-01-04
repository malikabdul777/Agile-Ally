// React

// Thirdparty

// Utils
import { groupNumber, ordersData } from "../../data/index";

// APISlices

// Slice

// CustomHooks

// Components
import OrdersPieChart from "../OrdersPieChart/OrdersPieChart";

// Constants

// Enums

// Interfaces

// Styles
import styles from "./Orders.module.css";

// Local enums

// Local constants

// Local Interfaces

const Orders = () => {
  return (
    <div className={`${styles.container} theme-container`}>
      <div className={styles.head}>
        <img src="./logo.png" alt="logo" />
        <span>Orders today</span>
      </div>
      <div className={`${styles.stat} grey-container`}>
        <span>Amount </span>
        <span>$ {groupNumber(4560)}</span>
      </div>

      <div className={styles.orders}>
        {ordersData.map((order, index) => (
          <div key={index} className={styles.order}>
            <div>
              <span>{order.name}</span>
              <span>${order.change}</span>
            </div>
            <div>
              <span>{order.type}</span>
              <span>Items: {order.items}</span>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.orderChart}>
        <span>Split by orders</span>
        <OrdersPieChart />
      </div>
    </div>
  );
};

export default Orders;
