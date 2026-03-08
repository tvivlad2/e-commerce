import React from "react";
import styles from "../components/account/AccountPage.module.css";
import AccountSidebar from "../components/account/AccountSidebar";
import ProfileForm from "../components/account/ProfileForm";

const AccountPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <span>Home / My Account</span>
        <span>
          Welcome! <b>Md Rimel</b>
        </span>
      </div>

      <div className={styles.content}>
        <AccountSidebar />
        <ProfileForm />
      </div>
    </div>
  );
};

export default AccountPage;
