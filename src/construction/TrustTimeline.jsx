import React from "react";
import styles from "./TrustTimeline.module.css";

import { FaClipboardList, FaPencilRuler, FaHammer, FaHome } from "react-icons/fa";

const TrustTimeline = () => {
  const steps = [
    {
      icon: <FaClipboardList />,
      title: "Consultation",
      description:
        "We start with a detailed consultation to understand your requirements and budget.",
    },
    {
      icon: <FaPencilRuler />,
      title: "Planning & Design",
      description:
        "Our architects and engineers create custom designs tailored to your vision.",
    },
    {
      icon: <FaHammer />,
      title: "Construction",
      description:
        "We execute the project with high-quality materials and expert supervision.",
    },
    {
      icon: <FaHome />,
      title: "Handover",
      description:
        "Your dream space is delivered on time with complete satisfaction guaranteed.",
    },
  ];

  return (
    <section className={styles.trustTimeline}>
      <h2>How We Work</h2>
      <div className={styles.timeline}>
        {steps.map((step, index) => (
          <div className={styles.timelineStep} key={index}>
            <div className={styles.icon}>{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustTimeline;
