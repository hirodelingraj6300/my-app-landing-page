import React, { useState } from "react";
import styles from "./BeforeAfterSlider.module.css";

export default function BeforeAfterSlider() {
  const [val, setVal] = useState(50);

  return (
    <section className={styles.section} id="before-after">
      <div className={`container ${styles.container}`}>
        <h2 className={styles.heading}>Before & After</h2>
        <p className={styles.sub}>
          Slide to see the transformation from shell to luxury finish.
        </p>

        {/* slider wrapper */}
        <div className={styles.slider}>
          {/* BEFORE image */}
          <img
            className={`${styles.img} ${styles.before}`}
            src="/img/cust_img-1.jpg"
            alt="Before"
            style={{ clipPath: `inset(0 ${100 - val}% 0 0)` }}
          />

          {/* AFTER image */}
          <img
            className={`${styles.img} ${styles.after}`}
            src="/img/img_interor-02.jpg"
            alt="After"
          />

          {/* range input */}
          <input
            className={styles.range}
            type="range"
            min="0"
            max="100"
            value={val}
            onChange={(e) => setVal(parseInt(e.target.value))}
            aria-label="Drag to compare before and after"
          />
        </div>
      </div>
    </section>
  );
}