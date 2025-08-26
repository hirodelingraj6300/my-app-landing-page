import React from "react";
import styles from "./ServicesSection.module.css";

const services = [
  {
    image:
      "/vastu_img/luxery_house.jpg",
    title: "Vastu for House",
    desc: "Ensure your home environment radiates harmony, prosperity, and well-being by aligning it with Vastu principles."
  },
  {
    image:
      "/vastu_img/main_door.jpg",
    title: "Vastu for Main Door",
    desc: "The main entrance defines energy flow. Proper positioning ensures positive energy and a life full of opportunities."
  },
  {
    image:
      "/vastu_img/per_kitchen_1.jpg",
    title: "Vastu for Kitchen",
    desc: "Balance the element of Fire with the right placement of your kitchen to ensure health and prosperity for your family."
  },
  {
    image:
       "/vastu_img/bed_vastu.jpg",
    title: "Vastu for Bedroom",
    desc: "The direction and layout of the bedroom affect peace, rest, and relationships. Align it to foster happiness."
  }
];

const ServicesSection = () => {
  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Our <span>Vastu Services</span>
        </h2>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img src={service.image} alt={service.title} />
              </div>
              <div className={styles.content}>
                <h3 className={styles.title}>{service.title}</h3>
                <p className={styles.desc}>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
