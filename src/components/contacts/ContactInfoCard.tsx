import React from "react";
import styles from "./ContactInfoCard.module.css";

interface Props {
  icon: string;
  title: string;
  children: React.ReactNode;
}

const ContactInfoCard: React.FC<Props> = ({ icon, title, children }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.icon}>{icon}</span>
        <h4>{title}</h4>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default ContactInfoCard;
