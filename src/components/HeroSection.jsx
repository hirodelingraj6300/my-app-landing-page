import React from "react";
import Slider from "react-slick";
import styles from "./Hero.module.css";

// -------- inline arrow components --------
const PrevArrow = (props) => (
  <div {...props} className={styles.prev}>‹</div>
);
const NextArrow = (props) => (
  <div {...props} className={styles.next}>›</div>
);

// ---------------------------------------

export default function HeroSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4200,
    arrows: true,
    pauseOnHover: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  const slides = [
    {
      id: 1,
      image: "/img/const_2.webp",
      title: "Transform Spaces. Elevate Living.",
      text: "Premium construction for residential, commercial, and luxury projects.",
    },
    {
      id: 2,
      image: "/img/cosnt_4.avif",
      title: "On-Time. On-Budget.",
      text: "End-to-end project management with transparent delivery.",
    },
    {
      id: 3,
      image: "/img/const_1.jpg",
      title: "Built to Last.",
      text: "Sustainable materials and quality craftsmanship you can trust.",
    },
  ];

  return (
    <section id="home" className={styles.hero}>
      <Slider {...settings}>
        {slides.map((s) => (
          <div className={styles.heroSlide} key={s.id}>
            <div
              className={styles.heroBg}
              style={{ backgroundImage: `url(${s.image})` }}
            />
            <div className={`${styles.heroContent} container`}>
              <h1>{s.title}</h1>
              <p>{s.text}</p>
              <div className={styles.heroActions}>
                {/* <a href="#contact" className={`${styles.btn} ${styles.btnPrimary}`}>
                  Start Your Project
                </a>
                <a href="#projects" className={`${styles.btn} ${styles.btnSecondary}`}>
                  View Our Work
                </a> */}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}