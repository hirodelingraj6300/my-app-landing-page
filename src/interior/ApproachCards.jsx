import React from 'react';
import styles from './ApproachCards.module.css';

const STEPS = [
  {
    tag: 'Concept',
    title: 'Discovery & Concept',
    desc: 'We learn your lifestyle, tastes and goals to define a clear brief.',
  },
  {
    tag: 'Design',
    title: 'Creative Design',
    desc: 'Material boards, 2D plans and 3D renders for crystal clarity.',
  },
  {
    tag: 'Build',
    title: 'Development & Renovation',
    desc: 'Quality execution with disciplined site management.',
  },
];

export default function ApproachCards() {
  return (
    <section id="services" className={styles.approach}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Our Approach</h2>
        <p className={styles.sectionSubtitle}>Concept → Design → Development</p>

        <div className={styles.approachGrid}>
          {STEPS.map((s, i) => (
            <div
              className={`${styles.approachCard} ${styles[`step${i + 1}`]}`}
              key={s.tag}
            >
              <span className={styles.badge}>{s.tag}</span>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}