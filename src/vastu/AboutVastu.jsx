import React from "react";
import styles from "./AboutVastu.module.css";

const AboutVastu = () => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <h2 className={styles.heading}>
            What is <span>Vastu Shastra?</span>
          </h2>
          <p className={styles.description}>
            Vastu Shastra is the ancient Indian science of architecture and 
            design that harmonizes living and working spaces with the laws 
            of nature. By balancing the five elements—Earth, Water, Fire, 
            Air, and Space—Vastu creates environments that promote 
            prosperity, peace, and well-being.
          </p>
          <p className={styles.subDescription}>
            Whether for homes, offices, or commercial spaces, Vastu provides 
            timeless principles that align energy flow and bring harmony to 
            everyday life.
          </p>
        </div>

        <div className={styles.imageContent}>
          <img
            src="/vastu_img/ab_vastu_1.jpg"
            alt="Vastu Mandala Diagram"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutVastu;
