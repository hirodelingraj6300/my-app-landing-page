import React from "react";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    name: "Rahul Sharma",
    feedback:
      "Our home feels lighter and more peaceful. Within weeks, we noticed positive changes in our family dynamics.",
  },
  {
    name: "Anita & Rajesh",
    feedback:
      "Vastu guidance helped us improve our business flow. Clients are happier, and so are we!",
  },
  {
    name: "Meera N.",
    feedback:
      "The changes were simple, but the impact was huge. I sleep better and feel more energized every day.",
  },
];

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>What Our Clients Say</h2>
      <div className={styles.testimonials}>
        {testimonials.map((t, i) => (
          <div key={i} className={styles.card}>
            <p className={styles.feedback}>"{t.feedback}"</p>
            <span className={styles.name}>- {t.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
