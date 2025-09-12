import React from "react";
import styles from "./AboutHero.module.css";

const AboutHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>Who We Are</h1>
        <p className={styles.subtitle}>
          Building trust and excellence for over 20+ years in construction,
          interiors, and vastu solutions.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
