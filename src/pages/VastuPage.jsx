import { useState, useEffect } from "react";
import HeroSection from "../vastu/HeroSection";
import AboutVastu from "../vastu/AboutVastu";
import BenefitsSection from "../vastu/BenefitsSection";
import ServicesSection from "../vastu/ServicesSection";
import MainDoorDirection from "../vastu/MainDoorDirection";
import CaseStudies from "../vastu/CaseStudies";
import Testimonials from "../vastu/Testimonials";
import FAQSection from "../vastu/FAQSection";
import Stats from "../vastu/Stats";
import ContactFooter from "../components/ContactFooter";
import BookingApp from "../vastu/BookingApp";
import modal from "../vastu/Modal.module.css"; // ✅ CSS module import

const VastuPage = () => {
  const [showBooking, setShowBooking] = useState(false);

  // ✅ Lock/unlock background scroll when modal is open
  useEffect(() => {
    if (showBooking) {
      document.body.style.overflow = "hidden"; // stop scroll
    } else {
      document.body.style.overflow = "auto"; // enable scroll back
    }
    return () => {
      document.body.style.overflow = "auto"; // cleanup on unmount
    };
  }, [showBooking]);

  return (
    <div>
      <HeroSection onBookClick={() => setShowBooking(true)} />
      <AboutVastu />
      <ServicesSection />
      <BenefitsSection />
      <MainDoorDirection />
      <CaseStudies />
      <Testimonials />
      <Stats />
      <FAQSection />
      <ContactFooter />

      {showBooking && (
        <div
          className={modal.modalOverlay}
          onClick={() => setShowBooking(false)}
        >
          <div
            className={modal.modalContainer}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={modal.modalClose}
              onClick={() => setShowBooking(false)}
            >
              ✖
            </button>
            <BookingApp />
          </div>
        </div>
      )}
    </div>
  );
};

export default VastuPage;
