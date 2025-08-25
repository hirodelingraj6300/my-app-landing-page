import React from 'react';
import styles from './ProjectShowcase.module.css';

const ROOMS = [
  { name: 'Bedroom', img: '/interior_img/bath_2.jpg' },
  { name: 'Kitchen', img: '/interior_img/kitchen_1.jpg' },
  { name: 'Living',  img: '/interior_img/live_int.jpg' },
  { name: 'Dining',  img: '/interior_img/kitchen_2.jpg' },
];

const GALLERY = [
  { name: 'Corporate Office', img: '/interior_img/inter_2.jpg' },
  { name: 'Minimal Room',     img: '/interior_img/kitchen_3.jpg' },
  { name: 'Living Room',      img: '/interior_img/living_1.jpg' },
  { name: 'Dinning Hall',     img: '/interior_img/living_2.jpg' },
];

const VASTU_ITEMS = [
  {
    img: '/interior_img/img_sun.jpg',
    lines: [
      'The sun represents energy and positivity in your home.',
      'Proper placement can enhance health and harmony.',
    ],
  },
  {
    img: '/interior_img/img_wheel.jpg',
    lines: [
      'Wheels symbolize motion and progress.',
      'Aligning them properly brings prosperity.',
    ],
  },
  {
    img: '/interior_img/img_life.jpg',
    lines: [
      'Life elements guide your daily routines.',
      'They balance energy flow in living spaces.',
    ],
  },
  {
    img: '/interior_img/img_acient.jpg',
    lines: [
      'Ancient Vastu principles remain timeless.',
      'Incorporating them ensures peace and stability.',
    ],
  },
];

export default function ProjectShowcase() {
  return (
    <section id="gallery" className={styles.showcase}>
      <div className={styles.container}>

        {/* Spaces We Transform */}
        <h2 className={styles.sectionTitle}>Spaces We Transform</h2>
        <p className={styles.sectionSubtitle}>Bedroom • Kitchen • Living • Dining</p>

        <div className={styles.roomGrid}>
          {ROOMS.map((r) => (
            <a
              className={styles.roomCard}
              key={r.name}
              href="#contact"
              style={{ '--bg': `url(${r.img})` }}
            >
              <span className={styles.roomName}>{r.name}</span>
            </a>
          ))}
        </div>

        {/* Modern Home Interior Designs */}
        <h3 className={`${styles.sectionTitle} ${styles.mtLg}`}>
          Modern Home Interior Designs
        </h3>
        <div className={styles.galleryGrid}>
          {GALLERY.map((g) => (
            <figure className={styles.galleryCard} key={g.name}>
              <img src={g.img} alt={g.name} loading="lazy" />
              <figcaption>{g.name}</figcaption>
            </figure>
          ))}
        </div>

        {/* Vastu & Harmonious Living */}
        <h3 className={`${styles.sectionTitle} ${styles.mtLg}`}>
          Vastu & Harmonious Living
        </h3>
        <div className={styles.vastuCards}>
          {VASTU_ITEMS.map((v, idx) => (
            <div className={styles.vastuCard} key={idx}>
              <div
                className={styles.vastuThumb}
                style={{ backgroundImage: `url(${v.img})` }}
              />
              <div className={styles.vastuBody}>
                <p className={styles.line}>{v.lines[0]}</p>
                <p className={styles.line}>{v.lines[1]}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}