import React from "react";
import styles from "./Approach.module.css";

const STEPS = [
  { step: 1, title: "Consult", text: "We scope your goals, budget, and timeline." },
  { step: 2, title: "Design", text: "Architectural plans, 3D views, and permits." },
  { step: 3, title: "Build", text: "Site execution with quality checks and supervision." },
  { step: 4, title: "Handover", text: "Snag-free delivery and documentation." },
];

export default function ApproachCards() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <h2 className={styles.heading}>Our Signature Process</h2>
        <p className={styles.sub}>
          A clear 4-step journey to take your project from paper to reality.
        </p>

        <div className={styles.grid}>
          {STEPS.map((s) => (
            <article className={styles.card} key={s.step}>
              <span className={styles.badge}>{s.step}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}