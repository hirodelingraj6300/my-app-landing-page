import React from 'react';
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroOverlay} />
      <div className={styles.heroContent}>
        <h1>Transform Your Home with Elegant Interior Design</h1>
        <p>We craft modern, functional and timeless spaces tailored to your lifestyle.</p>
        <div className={styles.heroActions}>
          {/* <a href="#contact" className="btn btn-primary">Get Free Consultation</a>
          <a href="#gallery" className="btn btn-outline">View Our Work</a> */}
        </div>
        <div className={styles.scrollIndicator} aria-hidden="true">↓</div>
      </div>
    </section>
  );
}
