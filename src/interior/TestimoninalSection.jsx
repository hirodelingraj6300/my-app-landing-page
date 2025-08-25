import React from 'react';
import styles from './TestimonialSection.module.css';

const REVIEWS = [
  {
    name: 'Aarav K.',
    quote: 'On-time delivery and flawless execution. Our living room feels brand new!',
    role: 'Bengaluru',
  },
  {
    name: 'Ishita P.',
    quote: 'Loved the 3D designs and the final result was even better.',
    role: 'Pune',
  },
  {
    name: 'Rohan S.',
    quote: 'Transparent pricing and great after-service. Highly recommended!',
    role: 'Hyderabad',
  },
];

export default function TestimonialSection() {
  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Happy Clients</h2>
        <p className={styles.sectionSubtitle}>Real stories from real homes</p>

        <div className={styles.grid}>
          {REVIEWS.map((r) => (
            <div className={styles.card} key={r.name}>
              <p className={styles.quote}>“{r.quote}”</p>
              <p className={styles.author}>
                — {r.name}, <span>{r.role}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}