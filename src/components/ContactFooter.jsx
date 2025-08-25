import React from "react";
import styles from "./ContactFooter.module.css";

export default function ContactFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.wrapper}`}>
        {/* left column */}
        <div className={styles.left}>
          <h3>Contact Us</h3>
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="tel" placeholder="Phone" />
            <textarea rows="4" placeholder="Project details"></textarea>
            <button className={styles.btn} type="submit">
              Send Message
            </button>
          </form>
        </div>

        {/* right column */}
        <div className={styles.right}>
          <h3>Our Office</h3>
          <p>123 Builders Lane, City Center, India</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ contact@buildcorp.com</p>
          <img
            className={styles.map}
            src="/img/img_villa_99.avif"
            alt="Map placeholder"
          />
        </div>
      </div>

      {/* bottom bar */}
      <div className={`container ${styles.bottom}`}>
        <span>© {new Date().getFullYear()} BuildCorp. All rights reserved.</span>
        <div className={styles.links}>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#projects">Projects</a>
        </div>
      </div>
    </footer>
  );
}