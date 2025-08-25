import React from "react";
import HeroSection from "../construction/HeroSection";
import OurServices from "../construction/OurServices";
import TestimonialSection from "../construction/TestimonialSection";
import ProjectShowcase from "../construction/ProjectShowCase";
import WyChooseUs from "../construction/WyChooseUs";
import TrustTimeline from "../construction/TrustTimeline";
import ContactFooter from "../components/ContactFooter";




const ConstructionPage = () => {
  return (
    <div>
      
      <HeroSection />
      <OurServices />
      <WyChooseUs /> 
      <ProjectShowcase />      
      <TrustTimeline />
      <TestimonialSection />
      <ContactFooter />

    </div>
  );
};

export default ConstructionPage;
