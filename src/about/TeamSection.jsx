import React from "react";
import styles from "./TeamSection.module.css";

const teamMembers = [
  {
    name: "Rajesh Kumar",
    role: "Founder & CEO",
    image:
      "/about_img/pic_5.jpg",
  },
  {
    name: "Anita Sharma",
    role: "Head of Interiors",
    image:
      "/about_img/pic_4.jpg",
  },
  {
    name: "Vikram Singh",
    role: "Lead Architect",
    image:
      "/about_img/pic_1.jpg",
  },
  {
    name: "Priya Verma",
    role: "Client Relations",
    image:
      "/about_img/pic_3.jpg",
  },
];

const TeamSection = () => {
  return (
    <section className={styles.team}>
      <h2 className={styles.heading}>Meet Our Experts</h2>
      <p className={styles.subheading}>
        A team of passionate professionals committed to turning your vision into
        reality.
      </p>

      <div className={styles.grid}>
        {teamMembers.map((member, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.imageWrapper}>
              <img
                src={member.image}
                alt={member.name}
                className={styles.image}
              />
              <div className={styles.overlay}>
                <span className={styles.role}>{member.role}</span>
              </div>
            </div>
            <h3 className={styles.name}>{member.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
