import React from 'react';
import HeroSection from '../interior/HeroSection.jsx';
import WyChooseUS from '../interior/WyChooseUS.jsx';
import ApproachCards from '../interior/ApproachCards.jsx';
import PricingSection from '../interior/PricingSection.jsx';
import ProjectShowcase from '../interior/ProjectShowcase.jsx'
import TestimoninalSection from '../interior/TestimoninalSection.jsx';
import ContactFooter from "../components/ContactFooter";


export default function InteriorPage() {
  return (
    <>
      
      <div>
        <HeroSection />
        <WyChooseUS />
        <ApproachCards />
        <PricingSection />
        <ProjectShowcase />
        <TestimoninalSection />
        <ContactFooter />
      </div>

    </>
  );
}
