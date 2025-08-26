/* src/components/Stats/Stats.jsx */
import { useEffect, useRef } from 'react';
import styles from './Stats.module.css';

const data = [
  { value: 18, unit: ' Lacs+', label: 'Lives Transformed' },
  { value: 1500, unit: '+', label: 'Volunteers Globally' },
  { value: 10, unit: '+', label: 'Centers Presence' },
];

const animateValue = (el, start, end, duration = 2000) => {
  const range = end - start;
  const stepTime = Math.abs(Math.floor(duration / range));
  let current = start;
  const timer = setInterval(() => {
    current += 1;
    el.textContent = current.toLocaleString();
    if (current === end) clearInterval(timer);
  }, stepTime);
};

export default function Stats() {
  const valueRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = entry.target.dataset.idx;
            const raw = data[idx].value;
            animateValue(entry.target, 0, raw);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    valueRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.stats}>
      <div className={styles.container}>
        <h2 className={styles.title}>Impact at a Glance</h2>
        <p className={styles.sub}>
          Real numbers, real change. Together we’re building a brighter tomorrow.
        </p>

        <div className={styles.grid}>
          {data.map((item, i) => (
            <article key={i} className={styles.card}>
              <span
                className={styles.value}
                ref={(el) => (valueRefs.current[i] = el)}
                data-idx={i}
              >
                0
              </span>
              <span className={styles.unit}>{item.unit}</span>
              <p className={styles.label}>{item.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}