import React from "react";
import styles from "./OurServices.module.css";


const OurServices = () => {
  return (
    <section className={styles.services}>
      <h2 className={styles.servicesTitle}>Our Construction Services</h2>
      <div className={styles.servicesGrid}>
        <div className={styles.serviceCard}>
          <img
            src="/Const_img/img_villa_88.avif"
            alt=""
          />
          <h3>Luxury Villa</h3>
          <p className="para">Modern and cozy luxury villa interiors tailored for you.</p>
        </div>

        <div className={styles.serviceCard}>
          <img
            src="/Const_img/img_villa.webp"
            alt=""
          />
          <h3>Commercial Construction</h3>
          <p className="para">Relaxing and stylish commercial spaces designed for productivity.</p>
        </div>

       
      </div>
    </section>
  );
};

export default OurServices;
