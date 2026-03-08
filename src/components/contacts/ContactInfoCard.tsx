import React from "react";
import styles from "./ContactInfoCard.module.css";

const ContactInfo: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.icon}>📞</div>
        <h4>Call To Us</h4>
        <p>We are available 24/7, 7 days a week.</p>
        <p>Phone: +8801611112222</p>
      </div>

      <div className={styles.card}>
        <div className={styles.icon}>✉️</div>
        <h4>Write To Us</h4>
        <p>Fill out our form and we will contact you within 24 hours.</p>
        <p>Email: customer@exclusive.com</p>
        <p>Email: support@exclusive.com</p>
      </div>
    </div>
  );
};

export default ContactInfo;
