import React from "react";
import styles from "./HeroSection.module.css";


const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroOverlay}>
        <div className={styles.heroContent}>
          <h1>We Build Your Dreams Into Reality</h1>
          <p>Trusted construction services with 20+ years of experience.</p>
          <button className={styles.ctaBtn}>Get Free Estimate</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
