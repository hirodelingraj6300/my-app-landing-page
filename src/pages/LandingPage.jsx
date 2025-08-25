import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FeatureCards from "../components/FeatureCards"; 
import WhyChooseUs from "../components/WhyChooseUs";
import ApproachCards from "../components/ApproachCards";
import ServicesSection from "../components/ServicesSection";
import ProjectShowcase from "../components/ProjectShowcase";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import TestimonialSection from "../components/TestimonialSection";
import StatsProof from "../components/StatsProof";
import CTASection from "../components/CTASection";
import ContactFooter from "../components/ContactFooter";



export default function LandingPage(){
  return (
    <>
      <Header />
      <div className="header-spacer" />
      <HeroSection />
      <FeatureCards />
      <WhyChooseUs />
      <ApproachCards />
      <ServicesSection />
      <ProjectShowcase />
      <BeforeAfterSlider />
      <TestimonialSection />
      <StatsProof />
      <CTASection />
      <ContactFooter />
    </>
  )
}