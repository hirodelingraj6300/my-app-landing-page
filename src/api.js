// src/api.js

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

// ===== Contact API =====
export async function sendContact(formData) {
  const res = await fetch(`${BASE_URL}/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });
  if (!res.ok) throw new Error("Network error");
  return res.json();
}

// ===== Booking APIs =====
export async function sendOtp(email) {
  const res = await fetch(`${BASE_URL}/bookings/send-otp`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });
  if (!res.ok) throw new Error("Failed to send OTP");
  return res.json();
}

export async function verifyOtp(email, otp) {
  const res = await fetch(`${BASE_URL}/bookings/verify-otp`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, otp }),
  });
  if (!res.ok) throw new Error("OTP verification failed");
  return res.json();
}

export async function createBooking(bookingData) {
  const res = await fetch(`${BASE_URL}/bookings`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(bookingData),
  });
  if (!res.ok) throw new Error("Booking failed");
  return res.json();
}

// ===== Slots API =====
export async function getBookedSlots(date) {
  const res = await fetch(`${BASE_URL}/slots/${date}`);
  if (!res.ok) throw new Error("Failed to fetch slots");
  return res.json();
}

// You can add more APIs here like cancelBooking, availability etc.
