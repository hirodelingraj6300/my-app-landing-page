import React from "react";
import styles from "./Testimonials.module.css";

const REVIEWS = [
  { quote: "They delivered our corporate HQ ahead of schedule with flawless finishing.", name: "Anita Verma", role: "COO, Zenith Corp" },
  { quote: "Professional team, transparent costing, and great communication.", name: "Rahul Mehta", role: "Founder, Mehta Realty" },
  { quote: "Our villa turned out exactly as envisioned—premium and on time.", name: "Priya Nair", role: "Homeowner" },
  { quote: "Strong site safety and quality checks. Highly recommended.", name: "Vikram Shah", role: "Project Director" },
];

export default function TestimonialSection() {
  return (
    <section className={styles.section} id="testimonials">
      <div className={`container ${styles.container}`}>
        <h2 className={styles.heading}>What Our Clients Say</h2>

        <div className={styles.grid}>
          {REVIEWS.map((r) => (
            <article className={styles.card} key={r.name}>
              <p className={styles.quote}>“{r.quote}”</p>
              <div className={styles.meta}>
                <strong>{r.name}</strong>
                <span>{r.role}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}