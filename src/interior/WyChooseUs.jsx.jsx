import React from 'react';
import styles from './WyChooseUs.module.css';

const ITEMS = [
  { title: 'Happy Clients', desc: '500+ delighted homeowners', icon: '🎉' },
  { title: 'On-Time Delivery', desc: 'Committed project timelines', icon: '⏱️' },
  { title: 'Extra Storage', desc: 'Smart space optimization', icon: '📦' },
  { title: 'After-Service', desc: 'Free post-handover support', icon: '🛠️' },
  { title: 'No Hidden Cost', desc: 'Transparent pricing always', icon: '💰' },
];

export default function WyChooseUS() {
  return (
    <section id="why-us" className={styles.why}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Why Choose Us</h2>
        <p className={styles.sectionSubtitle}>Trust, transparency and timeless design</p>

        <div className={styles.whyGrid}>
          {ITEMS.map((item) => (
            <div className={styles.whyCard} key={item.title}>
              <div className={styles.icon}>{item.icon}</div>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.desc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}