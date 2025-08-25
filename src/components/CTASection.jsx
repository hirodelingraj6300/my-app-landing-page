import React from "react";
import styles from "./CTA.module.css";

export default function CTASection() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.wrapper}`}>
        <h2 className={styles.heading}>Ready to Build with Us?</h2>
        <p className={styles.sub}>
          Let’s create something extraordinary together. Tell us about your project and timeline.
        </p>
        <a href="#contact" className={styles.btn}>
          Get a Free Consultation
        </a>
      </div>
    </section>
  );
}