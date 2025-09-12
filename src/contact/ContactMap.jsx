
import React from "react";
import styles from "./ContactMap.module.css";

const ContactMap = () => {
  return (
    <section className={styles.mapSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Find Us Here</h2>
        <p className={styles.subheading}>
          Visit our office or connect with us online — we’re easy to reach.
        </p>

        <div className={styles.mapWrapper}>
          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.4634110020916!2d78.4867!3d17.3850!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb978d5a8f3b6f%3A0x1a4fefc03a1c1b2b!2sHyderabad%2C%20Telangana%2C%20India!5e0!3m2!1sen!2sin!4v1692362345678!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
