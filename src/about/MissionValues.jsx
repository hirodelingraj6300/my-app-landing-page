import React from "react";
import styles from "./MissionValues.module.css";
import { CheckCircle, Award, Shield, Users } from "lucide-react";

const values = [
  {
    icon: <CheckCircle className={styles.icon} />,
    title: "Quality First",
    description:
      "Delivering excellence in every project with premium materials and skilled craftsmanship.",
  },
  {
    icon: <Award className={styles.icon} />,
    title: "20+ Years of Trust",
    description:
      "Our legacy of two decades stands as proof of reliability and client satisfaction.",
  },
  {
    icon: <Shield className={styles.icon} />,
    title: "Integrity & Transparency",
    description:
      "Clear communication, fair pricing, and ethical practices in everything we do.",
  },
  {
    icon: <Users className={styles.icon} />,
    title: "Client-Centric Approach",
    description:
      "We design and build with your vision at the heart of our solutions.",
  },
];

const MissionValues = () => {
  return (
    <section className={styles.mission}>
      <h2 className={styles.heading}>Our Mission & Values</h2>
      <p className={styles.subheading}>
        The principles that drive our work and build trust with our clients.
      </p>

      <div className={styles.valuesGrid}>
        {values.map((value, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.iconWrapper}>{value.icon}</div>
            <h3 className={styles.title}>{value.title}</h3>
            <p className={styles.description}>{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MissionValues;
