import React from "react";
import ContactHero from "../contact/ContactHero";
import ContactForm from "../contact/ContactForm";
import ContactInfo from "../contact/ContactInfo";
import ContactMap from "../contact/ContactMap";
import ContactFooter from "../components/ContactFooter";


const ContactPage = () => {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <ContactInfo />
      <ContactMap />
      <ContactFooter />
    </>
  );
};

export default ContactPage;
