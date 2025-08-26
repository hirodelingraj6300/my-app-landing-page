import React from "react";
import styles from "./BenefitsSection.module.css";
import { Home, CalendarDays, Hammer, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: <Home size={48} />,
    title: "For Owned & Rented Premises",
  },
  {
    icon: <CalendarDays size={48} />,
    title: "Solution Based on Date of Birth",
  },
  {
    icon: <Hammer size={48} />,
    title: "No Structural Changes Required",
  },
  {
    icon: <TrendingUp size={48} />,
    title: "Positive Results in 9–180 Days",
  },
];

export default function BenefitsSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Benefits & Features</h2>
      <div className={styles.cardGrid}>
        {benefits.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.icon}>{item.icon}</div>
            <p className={styles.text}>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
