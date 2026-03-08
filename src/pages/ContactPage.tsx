import React, { useState } from "react";
import styles from "../components/contacts/ContactInfoCard.module.css";
import ContactInfoCard from "../components/contacts/ContactInfoCard";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    alert("Message Sent Successfully!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className={styles.container}>
      <div className={styles.breadcrumb}>Home / Contact</div>

      <div className={styles.wrapper}>
        {/* Left Side Info */}
        <div className={styles.info}>
          <ContactInfoCard icon="📞" title="Call To Us">
            <p>We are available 24/7, 7 days a week.</p>
            <p>Phone: +8801611112222</p>
          </ContactInfoCard>

          <ContactInfoCard icon="✉️" title="Write To Us">
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p>Email: support@example.com</p>
            <p>Email: customer@example.com</p>
          </ContactInfoCard>
        </div>

        {/* Right Side Form */}
        <div className={styles.form}>
          <div className={styles.row}>
            <input
              type="text"
              placeholder="Your Name *"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Your Email *"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Your Phone *"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <textarea
            placeholder="Your Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />

          <button onClick={handleSubmit}>Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
