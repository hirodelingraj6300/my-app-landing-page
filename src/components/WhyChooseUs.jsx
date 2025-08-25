import React from "react";
import styles from "./WhyChooseUs.module.css";

const ITEMS = [
  { icon: "🏆", title: "Award-Winning Quality", text: "Multiple industry awards for craftsmanship and safety." },
  { icon: "🧭", title: "Transparent Process", text: "Clear timelines, cost breakdowns, and weekly updates." },
  { icon: "🛡️", title: "Safety First", text: "Strict site safety protocols and trained personnel." },
  { icon: "🤝", title: "Trusted Partners", text: "Vendor network for premium materials & finishes." },
];

export default function WhyChooseUs() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <h2 className={styles.heading}>Why Choose Us</h2>
        <p className={styles.sub}>
          From concept to handover, we deliver precision, speed, and durability
          with a&nbsp;client-first mindset.
        </p>

        <div className={styles.grid}>
          {ITEMS.map((it) => (
            <article className={styles.card} key={it.title}>
              <span className={styles.icon}>{it.icon}</span>
              <h3>{it.title}</h3>
              <p>{it.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}