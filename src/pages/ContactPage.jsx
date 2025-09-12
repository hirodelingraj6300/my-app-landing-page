import React from "react";
import ContactHero from "../contact/ContactHero";
import ContactForm from "../contact/ContactForm";
import ContactInfo from "../contact/ContactInfo";
import ContactMap from "../contact/ContactMap";

const ContactPage = () => {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <ContactInfo />
      <ContactMap />
    </>
  );
};

export default ContactPage;
