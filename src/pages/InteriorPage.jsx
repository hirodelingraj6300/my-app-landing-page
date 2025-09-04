import React from 'react';
import HeroSection from '../interior/HeroSection.jsx';
import WyChooseUs from '../interior/WyChooseUs.jsx';
import ApproachCards from '../interior/ApproachCards.jsx';
import PricingSection from '../interior/PricingSection.jsx';
import ProjectShowcase from '../interior/ProjectShowcase.jsx'
import TestimoninalSection from '../interior/TestimoninalSection.jsx';
import ContactFooter from "../components/ContactFooter";
import CTASection from "../components/CTASection";


export default function InteriorPage() {
  return (
    <>
      
      <div>
        <HeroSection />
        <WyChooseUs />
        <ApproachCards />
        <PricingSection />
        <ProjectShowcase />
        <TestimoninalSection />
        <CTASection />
        <ContactFooter />
      </div>

    </>
  );
}
