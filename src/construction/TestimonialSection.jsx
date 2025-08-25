import React from "react";
import styles from "./TestimonialSection.module.css";


const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Amit Sharma",
      role: "Home Owner",
      feedback:
        "Working with this team was seamless. They turned my dream house into reality with top-notch quality.",
      img: "/Const_img/img_men_03.jpg",
    },
    {
      name: "Priya Mehta",
      role: "Apartment Owner",
      feedback:
        "Professional, transparent, and timely delivery. I highly recommend them for construction projects.",
      img: "/Const_img/img_women_01.avif",
    },
    {
      name: "Rahul Verma",
      role: "Business Owner",
      feedback:
        "Our office renovation was handled perfectly. Excellent attention to detail and on-time handover.",
      img: "/Const_img/img_women_02.avif",
    },
  ];

  return (
    <section className={styles.testimonials}>
      <h2>What Our Clients Say</h2>
      <div className={styles.testimonialGrid}>
        {testimonials.map((t, index) => (
          <div className={styles.testimonialCard} key={index}>
            <img src={t.img} alt={t.name} />
            <p className={styles.feedback}>“{t.feedback}”</p>
            <h4>{t.name}</h4>
            <span>{t.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
