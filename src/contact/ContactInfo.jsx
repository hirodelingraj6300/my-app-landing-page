import React from "react";
import styles from "./ContactInfo.module.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <section className={styles.infoSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Our Contact Details</h2>
        <p className={styles.subheading}>
          You can reach us anytime — we’re just a call, email, or visit away.
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <FaMapMarkerAlt className={styles.icon} />
            <h3>Our Office</h3>
            <p>123 Premium Street, Business Hub, Bengaluru, India</p>
          </div>

          <div className={styles.card}>
            <FaPhoneAlt className={styles.icon} />
            <h3>Phone</h3>
            <p>+91 98765 43210</p>
          </div>

          <div className={styles.card}>
            <FaEnvelope className={styles.icon} />
            <h3>Email</h3>
            <p>contact@econstruction.com</p>
          </div>

          <div className={styles.card}>
            <FaClock className={styles.icon} />
            <h3>Working Hours</h3>
            <p>Mon - Sat: 9:00 AM – 7:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
