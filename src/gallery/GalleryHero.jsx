import React from "react";
import styles from "./GalleryHero.module.css";

const GalleryHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1 className={styles.title}>Our Project Showcase</h1>
          <p className={styles.subtitle}>
            Explore our finest works in construction, interiors, and vastu —
            designed with precision and passion.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GalleryHero;
