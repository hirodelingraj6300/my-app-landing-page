import React from "react";
import styles from "./CompanyTimeline.module.css";

const timelineData = [
  {
    year: "2000",
    title: "Our Beginning",
    description:
      "Started as a small team with a vision to deliver quality construction and design.",
    image:
      "/about_img/abt_2.jpg",
  },
  {
    year: "2010",
    title: "Expansion",
    description:
      "Grew into a full-service construction and interior firm with multiple successful projects.",
    image:
      "/about_img/abt_3.jpg",
  },
  {
    year: "2020",
    title: "Trusted Brand",
    description:
      "Recognized as a leading provider of construction, interior, and vastu solutions.",
    image:
      "/about_img/abt_4.jpg",
  },
  {
    year: "Today",
    title: "Premium Solutions",
    description:
      "Delivering modern, sustainable, and client-focused solutions to shape the future.",
    image:
      "/about_img/abt_5.jpg",
  },
];

const CompanyTimeline = () => {
  return (
    <section className={styles.timeline}>
      <h2 className={styles.heading}>Our Journey</h2>
      <div className={styles.timelineWrapper}>
        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`${styles.timelineItem} ${
              index % 2 === 0 ? styles.left : styles.right
            }`}
          >
            <div className={styles.content}>
              <span className={styles.year}>{item.year}</span>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
            </div>
            <div className={styles.imageWrapper}>
              <img
                src={item.image}
                alt={item.title}
                className={styles.image}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompanyTimeline;
