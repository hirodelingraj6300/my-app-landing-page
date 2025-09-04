// ContactFooter.jsx
import React, { useState } from "react";
import styles from "./ContactFooter.module.css";

/* simple helpers */
const isValidEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) && // basic RFC-like
  !email.match(/^[a-z]{2,}\d*@gmail\.com$/i) === false; // block fake gmail patterns quickly

const isValidPhone = (phone) => /^[6-9]\d{9}$/.test(phone); // 10-digit Indian mobile

export default function ContactFooter() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", description: "" });
  const [errors, setErrors] = useState({}); // field-level error messages
  const [status, setStatus] = useState(""); // "", "sending", "ok", "error"

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: "" }); // clear on type
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name required";
    if (!isValidEmail(form.email)) newErrors.email = "Valid email required";
    if (!isValidPhone(form.phone)) newErrors.phone = "Valid 10-digit Indian mobile required";
    if (!form.description.trim()) newErrors.description = "Query required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Network error");
      setStatus("ok");
      setForm({ name: "", email: "", phone: "", description: "" });
      setErrors({});
    } catch {
      setStatus("error");
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.wrapper}`}>
        {/* left column */}
        <div className={styles.left}>
          <h3>Contact Us</h3>
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
            />
            {errors.name && <small className={styles.err}>{errors.name}</small>}

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
            />
            {errors.email && <small className={styles.err}>{errors.email}</small>}

            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={form.phone}
              onChange={handleChange}
              maxLength={10}
            />
            {errors.phone && <small className={styles.err}>{errors.phone}</small>}

            <textarea
              rows="4"
              name="description"
              placeholder="Query details"
              value={form.description}
              onChange={handleChange}
            />
            {errors.description && <small className={styles.err}>{errors.description}</small>}

            <button className={styles.btn} type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Send Message"}
            </button>

            {status === "ok" && (
              <p style={{ color: "green", marginTop: 8 }}>Message sent ✅</p>
            )}
            {status === "error" && (
              <p style={{ color: "red", marginTop: 8 }}>Failed, try again ❌</p>
            )}
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