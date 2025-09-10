// src/components/ContactFooter.jsx
import React, { useState } from "react";
import styles from "./ContactFooter.module.css";
import { sendContact } from "../api"; // import from centralized api.js
import validator from "validator";

// ✅ Custom Email Validator (technical + business rules)
const isValidEmail = (email) => {
  if (!email) return false;

  const trimmed = email.trim().toLowerCase();

  // Step 1: Must be a valid email format
  if (!validator.isEmail(trimmed)) return false;

  // Step 2: Split into local part and domain
  const [localPart, domain] = trimmed.split("@");

  // Step 3: Allowed domains (extend as needed)
  const allowedDomains = ["gmail.com", "yahoo.com", "outlook.com"];
  if (!allowedDomains.includes(domain)) return false;

  // Step 4: Business rules for local part
  if (/^[a-z]{10,}$/.test(localPart)) return false; // reject pure gibberish like "aajsddadas"
  if (localPart.split(".").length > 2) return false; // too many dots
  if (/[^a-z0-9+._-]/i.test(localPart)) return false; // disallow weird chars

  return true;
};

const isValidPhone = (phone) => /^[6-9]\d{9}$/.test(phone);

export default function ContactFooter() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", description: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: "" });
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
      await sendContact(form);
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
        <div className={styles.left}>
          <h3>Contact Us</h3>
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} />
            {errors.name && <small className={styles.err}>{errors.name}</small>}

            <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} />
            {errors.email && <small className={styles.err}>{errors.email}</small>}

            <input type="tel" name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} maxLength={10} />
            {errors.phone && <small className={styles.err}>{errors.phone}</small>}

            <textarea rows="4" name="description" placeholder="Query details" value={form.description} onChange={handleChange} />
            {errors.description && <small className={styles.err}>{errors.description}</small>}

            <button className={styles.btn} type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Send Message"}
            </button>

            {status === "ok" && <p style={{ color: "green", marginTop: 8 }}>Message sent ✅</p>}
            {status === "error" && <p style={{ color: "red", marginTop: 8 }}>Failed, try again ❌</p>}
          </form>
        </div>

        <div className={styles.right}>
          <h3>Our Office</h3>
          <p>123 Builders Lane, City Center, India</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ contact@buildcorp.com</p>
          <img className={styles.map} src="/img/img_villa_99.avif" alt="Map placeholder" />
        </div>
      </div>

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
