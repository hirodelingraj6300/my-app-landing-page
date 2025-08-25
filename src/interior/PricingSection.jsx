import React from 'react';
import styles from "./PricingSection.module.css";

const PLANS = [
  { name: 'Essential', price: '₹3.9L', points: ['Modular kitchen', 'Wardrobe', 'Painting'], accent: 'accent-yellow' },
  { name: 'Eleganza', price: '₹6.9L', points: ['Kitchen + Wardrobe', 'False ceiling', 'Wall paneling'], accent: 'accent-teal' },
  { name: 'Eleganza Plus', price: '₹9.9L', points: ['Premium finishes', 'Lighting design', 'Smart storage'], accent: 'accent-blue' },
];

export default function PricingSection() {
  return (
    <section id="pricing" className={styles.pricing}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Transparent Pricing</h2>
        <p className={styles.sectionSubtitle}>Curated interior packages for every home</p>
        <div className={styles.pricingGrid}>
          {PLANS.map((p) => (
            <div className={`${styles.priceCard} ${styles[p.accent]}`} key={p.name}>
              <h3>{p.name}</h3>
              <div className={styles.price}>{p.price}<small> onwards</small></div>
              <ul>
                {p.points.map((pt) => <li key={pt}>{pt}</li>)}
              </ul>
              <a className={`${styles.btn} ${styles['btn-primary']}`} href="#contact">Select Plan</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
