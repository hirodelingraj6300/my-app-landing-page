// src/components/ContactForm.jsx
import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import { sendContact } from "../api"; // same backend API as footer
import validator from "validator";

// ✅ Reuse the same validation functions
const isValidEmail = (email) => {
  if (!email) return false;

  const trimmed = email.trim().toLowerCase();

  if (!validator.isEmail(trimmed)) return false;

  const [localPart, domain] = trimmed.split("@");

  const allowedDomains = ["gmail.com", "yahoo.com", "outlook.com"];
  if (!allowedDomains.includes(domain)) return false;

  if (/^[a-z]{10,}$/.test(localPart)) return false;
  if (localPart.split(".").length > 2) return false;
  if (/[^a-z0-9+._-]/i.test(localPart)) return false;

  return true;
};

const isValidPhone = (phone) => /^[6-9]\d{9}$/.test(phone);

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: "" }); // clear errors when typing
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name required";
    if (!isValidEmail(form.email)) newErrors.email = "Valid email required";
    if (!isValidPhone(form.phone))
      newErrors.phone = "Valid 10-digit Indian mobile required";
    if (!form.message.trim()) newErrors.message = "Message required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");
    try {
      await sendContact({
        ...form,
        description: form.message, // backend expects `description`
      });
      setStatus("ok");
      setForm({ name: "", email: "", phone: "", message: "" });
      setErrors({});
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className={styles.formSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Send Us a Message</h2>
        <p className={styles.subheading}>
          Fill out the form and we’ll get back to you within 24 hours.
        </p>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.row}>
            <div style={{ flex: 1 }}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className={styles.input}
              />
              {errors.name && <small className={styles.err}>{errors.name}</small>}
            </div>

            <div style={{ flex: 1 }}>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                className={styles.input}
              />
              {errors.email && (
                <small className={styles.err}>{errors.email}</small>
              )}
            </div>
          </div>

          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              value={form.phone}
              onChange={handleChange}
              required
              className={styles.input}
              maxLength={10}
            />
            {errors.phone && <small className={styles.err}>{errors.phone}</small>}
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
              className={styles.textarea}
            />
            {errors.message && (
              <small className={styles.err}>{errors.message}</small>
            )}
          </div>

          <button
            type="submit"
            className={styles.button}
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending…" : "Submit Message"}
          </button>

          {status === "ok" && (
            <p style={{ color: "green", marginTop: 8 }}>Message sent ✅</p>
          )}
          {status === "error" && (
            <p style={{ color: "red", marginTop: 8 }}>Failed, try again ❌</p>
          )}
        </form>
      </div>
    </section>
  );
}
