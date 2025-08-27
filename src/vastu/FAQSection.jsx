import React, { useState } from "react";
import styles from "./FAQSection.module.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "What is Vastu Shastra?",
    answer:
      "Vastu Shastra is an ancient Indian science of architecture and design that harmonizes spaces with natural energies.",
  },
  {
    question: "Do I need to rebuild my house?",
    answer:
      "No. Most Vastu corrections can be done without structural changes using simple adjustments and remedies.",
  },
  {
    question: "When will I see results?",
    answer:
      "Positive results are often seen within 9 to 180 days depending on the corrections made and individual circumstances.",
  },
  {
    question: "Can Vastu be applied to modern apartments and offices?",
    answer:
      "Yes, Vastu principles can be adapted to contemporary spaces, ensuring balance and prosperity even in modern designs.",
  },
  {
    question: "Is Vastu Shastra scientifically proven?",
    answer:
      "Vastu aligns with natural elements like sunlight, airflow, and magnetic fields—creating healthier, more harmonious living environments.",
  },
  {
    question: "Do you provide personalized consultations?",
    answer:
      "Yes, we offer customized Vastu consultations tailored to your property, lifestyle, and long-term goals for maximum benefits.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Frequently Asked Questions</h2>
      <div className={styles.faqList}>
        {faqs.map((faq, i) => (
          <div key={i} className={styles.faqItem}>
            <button className={styles.question} onClick={() => toggleFAQ(i)}>
              <span>{faq.question}</span>
              <span className={styles.arrow}>
                {openIndex === i ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </button>
            {openIndex === i && <p className={styles.answer}>{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
