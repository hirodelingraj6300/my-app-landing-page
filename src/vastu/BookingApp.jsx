import React, { useState, useEffect, useMemo } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./BookingApp.module.css";

const BOOKING_API = "http://localhost:5000/api/bookings";
const SLOT_API     = "http://localhost:5000/api/slots";

const toHHMMSS = (t) => (t?.split(":").length === 2 ? `${t}:00` : t);

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

// ---------- email / phone gates ----------
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TYPO_DOMAINS = new Set([
  "gmial.com", "yahooo.com", "hotmial.com", "gamil.com", "outlok.com"
]);
const DISPOSABLE_DOMAINS = new Set([
  "mailinator.com", "tempmail.com", "10minutemail.com", "guerrillamail.com"
]);

// quick client-side gate
const isRealEmail = (email) => {
  if (!EMAIL_REGEX.test(email)) return false;
  const [, domain] = email.split("@");
  if (!domain) return false;
  const d = domain.toLowerCase();
  if (TYPO_DOMAINS.has(d) || DISPOSABLE_DOMAINS.has(d)) return false;
  const tld = d.split(".").pop();
  return tld && tld.length >= 2;
};

const PHONE_REGEX = /^[6-9]\d{9}$/;

const BookingApp = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    product: "",
    date: "",
    time: "",
  });
  const [otp, setOtp] = useState("");
  const [showOtpBox, setShowOtpBox] = useState(false);
  const [msg, setMsg] = useState("");

  const [bookedSlots, setBookedSlots] = useState([]);
  const [fullyBooked, setFullyBooked] = useState(false);
  const [blockedDates, setBlockedDates] = useState([]);
  const [err, setErr] = useState({ email: "", phone: "" });

  const availableSlots = useMemo(
    () => TIME_SLOTS.filter(({ value }) => !bookedSlots.includes(value)),
    [bookedSlots]
  );

  // ---------- load fully-booked days ----------
  useEffect(() => {
    const today = new Date();
    const next90 = [...Array(90)].map((_, i) => {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      return d.toISOString().split("T")[0];
    });

    Promise.all(
      next90.map((date) =>
        fetch(`${SLOT_API}/${date}`)
          .then((r) => r.json())
          .then((d) => ({ date, full: (d?.bookedSlots?.length ?? 0) >= TIME_SLOTS.length }))
          .catch(() => ({ date, full: false }))
      )
    ).then((res) => setBlockedDates(res.filter((r) => r.full).map((r) => r.date)));
  }, []);

  // ---------- fetch booked slots when date changes ----------
useEffect(() => {
  if (!form.date) {
    setBookedSlots([]);
    setFullyBooked(false);
    return;
  }

  fetch(`${SLOT_API}/${form.date}`)
    .then((r) => r.json())
    .then((d) => {
      const booked = Array.isArray(d?.bookedSlots) ? d.bookedSlots : [];
      setBookedSlots(booked);
      setFullyBooked(booked.length >= TIME_SLOTS.length);
      // if currently selected time became booked, clear it
      if (booked.includes(form.time)) setForm((p) => ({ ...p, time: "" }));
    })
    .catch(() => setBookedSlots([]));
}, [form.date, form.time]); // <-- keep form.time in deps

  // ---------- handle changes ----------
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "date") {
      setForm((p) => ({ ...p, date: value, time: "" }));
      return;
    }
    setForm((p) => ({ ...p, [name]: value }));

    if (name === "email") {
      setErr((p) => ({ ...p, email: isRealEmail(value) ? "" : "Invalid or disposable email" }));
    }
    if (name === "phone") {
      setErr((p) => ({ ...p, phone: PHONE_REGEX.test(value) ? "" : "Enter a valid 10-digit number" }));
    }
  };

  // ---------- submit ----------
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");

    if (!form.name || !form.phone || !form.email || !form.product || !form.date || !form.time) {
      setMsg("All fields are required.");
      return;
    }
    if (err.email || err.phone) return;
    if (fullyBooked || bookedSlots.includes(form.time)) {
      setMsg("Selected slot is unavailable.");
      return;
    }

    // final email gate
    if (!isRealEmail(form.email)) {
      setMsg("Please use a genuine email address");
      return;
    }

    try {
      const res = await fetch(`${BOOKING_API}/send-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: form.email }),
      });
      const data = await res.json();
      if (res.ok) {
        setShowOtpBox(true);
        setMsg("📩 OTP sent to your email.");
      } else setMsg(data.message || "Failed to send OTP");
    } catch {
      setMsg("Server error. Try again.");
    }
  };

  const handleVerifyOtp = async () => {
    setMsg("");
    try {
      const vRes = await fetch(`${BOOKING_API}/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: form.email, otp }),
      });
      const vData = await vRes.json();
      if (!vRes.ok) {
        setMsg(vData.message || "OTP verification failed");
        return;
      }
      const payload = {
        name: form.name,
        email: form.email,
        phone: form.phone,
        description: form.product,
        booking_date: form.date,
        booking_time: toHHMMSS(form.time),
      };
      const bRes = await fetch(BOOKING_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const bData = await bRes.json();
      if (bRes.ok) {
        setMsg("✅ Booking confirmed!");
        setTimeout(() => {
  // hard refresh the page
  window.location.reload();
}, 2500);   
        setShowOtpBox(false);
      } else setMsg(bData.error || "Booking failed");
    } catch {
      setMsg("Server error.");
    }
  };

  const handleResendOtp = async () => {
    setMsg("");
    try {
      const res = await fetch(`${BOOKING_API}/send-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: form.email }),
      });
      const data = await res.json();
      setMsg(res.ok ? "📩 OTP resent." : data.message || "Failed");
    } catch {
      setMsg("Server error.");
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h1 className={styles.heading}>Vastu Consultation Booking</h1>
        <p className={styles.subHeading}>Select a slot & let’s bring harmony to your space.</p>

        <form onSubmit={handleSubmit} noValidate>
          <div className={styles.grid}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className={styles.input}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className={styles.input}
              maxLength={10}
              required
            />
            {err.phone && <span className={styles.error}>{err.phone}</span>}

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className={styles.input}
              required
            />
            {err.email && <span className={styles.error}>{err.email}</span>}

            <input
              type="text"
              name="product"
              placeholder="Service / Query Details"
              value={form.product}
              onChange={handleChange}
              className={styles.input}
              required
            />

            <div className={styles.half}>
              <label className={styles.label}>Preferred Date</label>
              <DatePicker
                selected={form.date ? new Date(form.date) : null}
                onChange={(date) =>
                  setForm((p) => ({
                    ...p,
                    date: date ? date.toISOString().split("T")[0] : "",
                    time: "",
                  }))
                }
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
                <option value="" disabled>
                  {fullyBooked ? "All booked" : "Select slot"}
                </option>
                {availableSlots.map(({ value, label }) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button
            type="submit"
            disabled={fullyBooked || !!err.email || !!err.phone}
            className={styles.btn}
          >
            Submit & Request OTP
          </button>
        </form>

        {msg && <p className={styles.msg}>{msg}</p>}

        {showOtpBox && (
          <div className={styles.overlay}>
            <div className={styles.modal}>
              <button className={styles.close} onClick={() => setShowOtpBox(false)}>
                ✕
              </button>
              <h2>Enter OTP</h2>
              <input
                type="text"
                placeholder="6-digit OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                maxLength={6}
                className={styles.input}
              />
              <button onClick={handleVerifyOtp} className={styles.btn}>
                Verify OTP
              </button>
              <button onClick={handleResendOtp} className={`${styles.btn} ${styles.ghost}`}>
                Resend OTP
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingApp;