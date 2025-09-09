import React, { useState, useEffect, useMemo } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./BookingApp.module.css";
import { toast } from "react-toastify";
import { sendOtp, verifyOtp, createBooking, getBookedSlots } from "../api"; // centralized api.js

const TIME_SLOTS = [
  { value: "09:00", label: "09:00 AM" },
  { value: "10:00", label: "10:00 AM" },
  { value: "11:00", label: "11:00 AM" },
  { value: "12:00", label: "12:00 PM" },
  { value: "13:00", label: "01:00 PM" },
  { value: "14:00", label: "02:00 PM" },
  { value: "15:00", label: "03:00 PM" },
  { value: "16:00", label: "04:00 PM" },
  { value: "17:00", label: "05:00 PM" },
];

const PHONE_REGEX = /^[6-9]\d{9}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const BookingApp = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", product: "", date: "", time: "" });
  const [otp, setOtp] = useState("");
  const [showOtpBox, setShowOtpBox] = useState(false);
  const [bookedSlots, setBookedSlots] = useState([]);
  const [fullyBooked, setFullyBooked] = useState(false);
  const [blockedDates, setBlockedDates] = useState([]);
  const [err, setErr] = useState({ email: "", phone: "" });

  const availableSlots = useMemo(
    () => TIME_SLOTS.filter(({ value }) => !bookedSlots.includes(value)),
    [bookedSlots]
  );

  // Load fully booked days
  useEffect(() => {
    const today = new Date();
    const next90 = [...Array(90)].map((_, i) => {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      return d.toISOString().split("T")[0];
    });

    Promise.all(
      next90.map((date) =>
        getBookedSlots(date)
          .then((d) => ({ date, full: (d?.bookedSlots?.length ?? 0) >= TIME_SLOTS.length }))
          .catch(() => ({ date, full: false }))
      )
    ).then((res) => setBlockedDates(res.filter((r) => r.full).map((r) => r.date)));
  }, []);

  // Fetch slots for selected date
  useEffect(() => {
    if (!form.date) return setBookedSlots([]);
    getBookedSlots(form.date)
      .then((d) => {
        const booked = Array.isArray(d?.bookedSlots) ? d.bookedSlots : [];
        setBookedSlots(booked);
        setFullyBooked(booked.length >= TIME_SLOTS.length);
        if (booked.includes(form.time)) setForm((p) => ({ ...p, time: "" }));
      })
      .catch(() => setBookedSlots([]));
  }, [form.date, form.time]);

  // Handle input
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "date") return setForm((p) => ({ ...p, date: value, time: "" }));
    setForm((p) => ({ ...p, [name]: value }));

    if (name === "email") setErr((p) => ({ ...p, email: EMAIL_REGEX.test(value) ? "" : "Invalid email" }));
    if (name === "phone") setErr((p) => ({ ...p, phone: PHONE_REGEX.test(value) ? "" : "Invalid 10-digit number" }));
  };

  // Submit form → request OTP
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.email || !form.product || !form.date || !form.time) {
      return toast.error("All fields are required.");
    }
    if (err.email || err.phone) return;
    if (fullyBooked || bookedSlots.includes(form.time)) {
      return toast.error("Selected slot is unavailable.");
    }

    try {
      await sendOtp(form.email);
      setShowOtpBox(true);
      toast.info("📩 OTP sent to your email.");
    } catch {
      toast.error("Server error. Try again.");
    }
  };

  // Verify OTP + create booking
  const handleVerifyOtp = async () => {
    try {
      await verifyOtp(form.email, otp);

      const payload = {
        name: form.name,
        email: form.email,
        phone: form.phone,
        description: form.product,
        booking_date: form.date,
        booking_time: form.time + ":00",
      };

      await createBooking(payload);

      toast.success("✅ Booking confirmed!");

      // Smart reset (no reload, no 404)
      setTimeout(() => {
        setForm({ name: "", phone: "", email: "", product: "", date: "", time: "" });
        setOtp("");
        setShowOtpBox(false);
      }, 2000);
    } catch (err) {
      toast.error(err.message || "Booking failed");
    }
  };

  const handleResendOtp = async () => {
    try {
      await sendOtp(form.email);
      toast.info("📩 OTP resent.");
    } catch {
      toast.error("Failed to resend OTP");
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h1 className={styles.heading}>Vastu Consultation Booking</h1>
        <p className={styles.subHeading}>Select a slot & let’s bring harmony to your space.</p>

        <form onSubmit={handleSubmit} noValidate>
          <div className={styles.grid}>
            <input type="text" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required className={styles.input} />
            <input type="tel" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} maxLength={10} required className={styles.input} />
            {err.phone && <span className={styles.error}>{err.phone}</span>}

            <input type="email" name="email" placeholder="Email Address" value={form.email} onChange={handleChange} required className={styles.input} />
            {err.email && <span className={styles.error}>{err.email}</span>}

            <input type="text" name="product" placeholder="Service / Query Details" value={form.product} onChange={handleChange} required className={styles.input} />

            <div className={styles.half}>
              <label className={styles.label}>Preferred Date</label>
              <DatePicker
                selected={form.date ? new Date(form.date) : null}
                onChange={(date) => setForm((p) => ({ ...p, date: date ? date.toISOString().split("T")[0] : "", time: "" }))}
                excludeDates={blockedDates.map((d) => new Date(d))}
                minDate={new Date()}
                dateFormat="dd-MM-yyyy"
                placeholderText="Select Date"
                className={styles.input}
                required
              />
            </div>

            <div className={styles.half}>
              <label className={styles.label}>Preferred Time</label>
              <select
                name="time"
                value={form.time}
                onChange={handleChange}
                className={styles.input}
                disabled={!form.date || fullyBooked}
                required
              >
                <option value="" disabled>{fullyBooked ? "All booked" : "Select slot"}</option>
                {availableSlots.map(({ value, label }) => <option key={value} value={value}>{label}</option>)}
              </select>
            </div>
          </div>

          <button type="submit" disabled={fullyBooked || !!err.email || !!err.phone} className={styles.btn}>
            Submit & Request OTP
          </button>
        </form>

        {showOtpBox && (
          <div className={styles.overlay}>
            <div className={styles.modal}>
              <button className={styles.close} onClick={() => setShowOtpBox(false)}>✕</button>
              <h2>Enter OTP</h2>
              <input type="text" placeholder="6-digit OTP" value={otp} onChange={(e) => setOtp(e.target.value)} maxLength={6} className={styles.input} />
              <button onClick={handleVerifyOtp} className={styles.btn}>Verify OTP</button>
              <button onClick={handleResendOtp} className={`${styles.btn} ${styles.ghost}`}>Resend OTP</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingApp;
