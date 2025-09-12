import React from "react";
import styles from "./Services.module.css";

const SERVICES = [
  { title: "Residential Construction", img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1200&auto=format&fit=crop" },
  { title: "Commercial Projects", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop" },
  { title: "Renovations & Interiors", img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop" },
  { title: "Project Management", img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop" },
];

export default function ServicesSection() {
  return (
    <section className={styles.section} id="services">
      <div className={`container ${styles.container}`}>
        <h2 className={styles.heading}>Our Services</h2>
        <p className={styles.sub}>
          From luxury villas to corporate towers, we plan, build, and deliver end-to-end.
        </p>

        <div className={styles.grid}>
          {SERVICES.map((s) => (
            <article className={styles.card} key={s.title}>
              <img src={s.img} alt={s.title} />
              <div className={styles.body}>
                <h3>{s.title}</h3>
                {/* <a href="#contact" className={styles.btn}>Learn More</a> */}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}