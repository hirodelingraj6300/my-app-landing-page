import React from "react";
import styles from "./ProjectShowcase.module.css";


const ProjectShowCase = () => {
  const projects = [
    {
      title: "Elegant Outside. Warm Inside",
      img: "/Const_img/home_1.jpg",
    },
    {
      title: "Comfort Meet Classic",
      img: "/Const_img/home_2.jpg",
    },
    {
      title: "Modern Design. Homely Feel",
      img: "/Const_img/home_3.jpg",
    },
    
  ];

  return (
    <section className={styles.projectShowcase}>
      <h2>Our Recent Projects</h2>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div className={styles.projectCard} key={index}>
            <img src={project.img} alt={project.title} />
            <div className={styles.overlay}>
              <h3>{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectShowCase;
