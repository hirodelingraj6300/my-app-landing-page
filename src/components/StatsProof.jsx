import React from "react";
import styles from "./Stats.module.css";

const STATS = [
  { num: "150+", label: "Completed Projects" },
  { num: "20+", label: "Years of Experience" },
  { num: "98%", label: "On-time Delivery" },
  { num: "50+", label: "Corporate Clients" },
];

export default function StatsProof() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.grid}>
          {STATS.map((s) => (
            <div className={styles.stat} key={s.label}>
              <span className={styles.number}>{s.num}</span>
              <span className={styles.label}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}