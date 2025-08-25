import React from "react";
import styles from "./WyChooseUs.module.css";


const WyChooseUs = () => {
  const reasons = [
    {
      title: "20+ Years Experience",
      desc: "We bring decades of expertise in construction and design.",
      img:"/Const_img/logo_42.png"
    },
    {
      title: "On-Time Delivery",
      desc: "We ensure timely completion without compromising quality.",
      img: "/Const_img/logo_41.png"
    },
    {
      title: "Quality Materials",
      desc: "We use only trusted, high-grade materials for durability.",
      img: "/Const_img/logo_43.png"
    },
    {
      title: "Transparent Pricing",
      desc: "No hidden costs. Everything is clear and upfront.",
      img: "/Const_img/logo_45.png"
    }
  ];

  return (
    <section className={styles.whyChooseUs}>
      <h2>Why Choose Us</h2>
      <div className={styles.reasonsGrid}>
        {reasons.map((item, index) => (
          <div className={styles.reasonCard} key={index}>
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WyChooseUs;
