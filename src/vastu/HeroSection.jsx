import React from "react";
import styles from "./HeroSection.module.css";

const HeroSection = ({ onBookClick }) => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroOverlay}></div>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>
          Discover Harmony with <span>Vastu Shastra</span>
        </h1>
        <p className={styles.subtitle}>
          Align your home and workplace with the timeless science of balance,
          prosperity, and well-being.
        </p>
        <button className={styles.cta} onClick={onBookClick}>
          Book Consultation
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
