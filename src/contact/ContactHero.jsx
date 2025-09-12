import React from "react";
import styles from "./ContactHero.module.css";

const ContactHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1 className={styles.title}>Get in Touch With Us</h1>
          <p className={styles.subtitle}>
            We’re here to answer your questions and help you build your dream
            space. Reach out today — our experts are ready to assist you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
