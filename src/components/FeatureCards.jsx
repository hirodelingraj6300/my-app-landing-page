import React from "react";
import { Link } from "react-router-dom";  
import styles from "./FeatureStrip.module.css";

const CARDS = [
  {
    title: "Interior Expert",
    desc: "Crafting functional & aesthetic interiors tailored to your lifestyle.",
    img: "/img/interior_front_3.jpg",
     route: "/interiors", 
  },
  {
    title: "Construction Excellence",
    desc: "98 % of our projects delivered on schedule across 20+ years.",
    img: "/img/cosnt_3.avif",
    route: "/construction",
  },
  {
    title: "Vastu and Numerology",
    desc: "Balancing energy & architecture through trusted Vastu guidance.",
    img: "/img/vatus_img.jpg",
    route: "/vastu",
  },
];

export default function FeatureCards() {
  return (
    <section className={styles.featureStrip}>
      <div className={styles.wrap}>
        {CARDS.map((c) => (
          <article className={styles.card} key={c.title}>
            <img src={c.img} alt={c.title} />
            <div className={styles.body}>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
                <Link to={c.route} className={styles.btn}>View More</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}