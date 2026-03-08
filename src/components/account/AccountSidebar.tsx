import React from "react";
import styles from "./AccountSidebar.module.css";

const AccountSidebar: React.FC = () => {
  const handleClick = (item: string) => {
    alert(`${item} clicked`);
  };

  return (
    <div className={styles.sidebar}>
      <div>
        <h4>Manage My Account</h4>
        <ul>
          <li onClick={() => handleClick("My Profile")}>My Profile</li>
          <li onClick={() => handleClick("Address Book")}>Address Book</li>
          <li onClick={() => handleClick("Payment Options")}>
            My Payment Options
          </li>
        </ul>
      </div>

      <div>
        <h4>My Orders</h4>
        <ul>
          <li onClick={() => handleClick("My Returns")}>My Returns</li>
          <li onClick={() => handleClick("My Cancellations")}>
            My Cancellations
          </li>
        </ul>
      </div>

      <div>
        <h4>My Wishlist</h4>
      </div>
    </div>
  );
};

export default AccountSidebar;
