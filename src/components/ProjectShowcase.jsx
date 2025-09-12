import React from "react";
import styles from "./Projects.module.css";

const PROJECTS = [
  { name: "Modern Villa", tag: "Residential", img: "/img/mod_villa_1.avif" },
  { name: "Corporate Tower", tag: "Commercial", img: "/img/tower_1.jpg" },
  { name: "Luxury Apartment", tag: "Residential", img: "/img/luxery_2.jpg" },
  { name: "Shopping Mall", tag: "Commercial", img: "/img/mall_4.jpg" },
  { name: "Eco Homes", tag: "Sustainable", img: "/img/eco_1.jpg" },
  { name: "Resort Complex", tag: "Hospitality", img: "/img/restore_1.jpg" },
];

export default function ProjectShowcase() {
  return (
    <section className={styles.section} id="projects">
      <div className={`container ${styles.container}`}>
        <h2 className={styles.heading}>Featured Projects</h2>
        <p className={styles.sub}>
          A snapshot of our recent builds across India.
        </p>

        <div className={styles.grid}>
          {PROJECTS.map((p) => (
            <article className={styles.card} key={p.name}>
              <div className={styles.imageWrap}>
                <img src={p.img} alt={p.name} />
                <span className={styles.tag}>{p.tag}</span>
              </div>

              <div className={styles.body}>
                <h3>{p.name}</h3>
                {/* <a href="#" className={styles.btn}>
                  View Case Study
                </a> */}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}