import React from "react";
import styles from "../components/contacts/ContactPage.module.css";
import ContactInfo from "../components/contacts/ContactInfoCard";
import ContactForm from "../components/contacts/ContactForm";

const ContactPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.breadcrumb}>Home / Contact</div>

      <div className={styles.content}>
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
