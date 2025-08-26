import React from "react";
import styles from "./CaseStudies.module.css";

const caseStudies = [
  {
    title: "Residential Vastu Transformation",
    description:
      "A family experiencing financial stress saw a 40% increase in stability within 3 months after minor vastu corrections.",
    image: "/vastu_img/res_vastu.jpg",
  },
  {
    title: "Office Growth with Vastu",
    description:
      "A startup restructured workspace as per vastu guidelines and scaled revenue 2X within 6 months.",
    image: "/vastu_img/office_vastu.jpg",
  },
  {
    title: "Health & Harmony Improvement",
    description:
      "Correcting bedroom directions improved sleep quality and reduced health complaints for a couple.",
    image: "/vastu_img/health_vastu.jpg",
  },
];

export default function CaseStudies() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Case Studies</h2>
      <div className={styles.grid}>
        {caseStudies.map((study, index) => (
          <div key={index} className={styles.card}>
            <img src={study.image} alt={study.title} className={styles.image} />
            <div className={styles.content}>
              <h3>{study.title}</h3>
              <p>{study.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
