import React, { useState } from "react";
import styles from "./ContactForm.module.css";

const ContactForm: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = () => {
    alert("Message Sent!");
  };

  return (
    <div className={styles.formBox}>
      <div className={styles.row}>
        <input
          placeholder="Your Name *"
          value={form.name}
          onChange={(e) => handleChange("name", e.target.value)}
        />

        <input
          placeholder="Your Email *"
          value={form.email}
          onChange={(e) => handleChange("email", e.target.value)}
        />

        <input
          placeholder="Your Phone *"
          value={form.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
        />
      </div>

      <textarea
        placeholder="Your Message"
        value={form.message}
        onChange={(e) => handleChange("message", e.target.value)}
      />

      <div className={styles.buttonRow}>
        <button onClick={handleSubmit}>Send Message</button>
      </div>
    </div>
  );
};

export default ContactForm;
