import React from "react";
import styles from "./MainDoorDirection.module.css";

const directions = [
  "East",
  "West",
  "North",
  "South",
  "South West",
  "North West",
  "South East",
  "North East",
];

export default function MainDoorDirection() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Choose Your Main Door Direction</h2>
      <p className={styles.subtitle}>
        Learn how the direction of your house may impact you and your family
      </p>
      <div className={styles.grid}>
        {directions.map((dir) => (
          <div key={dir} className={styles.card}>
            <div className={styles.compass}>
              {/* Compass SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                className={styles.icon}
              >
                <circle cx="50" cy="50" r="45" stroke="white" strokeWidth="2" fill="none"/>
                <line x1="50" y1="5" x2="50" y2="20" stroke="white" strokeWidth="2"/>
                <line x1="50" y1="80" x2="50" y2="95" stroke="white" strokeWidth="2"/>
                <line x1="5" y1="50" x2="20" y2="50" stroke="white" strokeWidth="2"/>
                <line x1="80" y1="50" x2="95" y2="50" stroke="white" strokeWidth="2"/>
                <text x="48" y="15" fontSize="8" fill="white">N</text>
                <text x="48" y="95" fontSize="8" fill="white">S</text>
                <text x="10" y="53" fontSize="8" fill="white">W</text>
                <text x="90" y="53" fontSize="8" fill="white">E</text>
              </svg>
            </div>
            <p className={styles.direction}>{dir}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
