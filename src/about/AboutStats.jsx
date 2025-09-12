import React, { useEffect, useState } from "react";
import styles from "./AboutStats.module.css";

const statsData = [
  { label: "Years of Excellence", value: 20 },
  { label: "Projects Completed", value: 500 },
  { label: "Happy Clients", value: 350 },
  { label: "Awards Won", value: 25 },
];

const AboutStats = () => {
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const intervals = statsData.map((stat, index) => {
      let current = 0;
      const increment = Math.ceil(stat.value / 100);

      return setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          current = stat.value;
          clearInterval(intervals[index]);
        }
        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = current;
          return updated;
        });
      }, 30);
    });

    return () => intervals.forEach((interval) => clearInterval(interval));
  }, []);

  return (
    <section className={styles.stats}>
      <div className={styles.wrapper}>
        {statsData.map((stat, index) => (
          <div key={index} className={styles.card}>
            <h3 className={styles.value}>{counts[index]}+</h3>
            <p className={styles.label}>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutStats;
