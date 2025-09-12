import React from "react";
import AboutHero from "../about/AboutHero";
import CompanyTimeline from "../about/CompanyTimeline";
import AboutStats from "../about/AboutStats";
import MissionValues from "../about/MissionValues";
import TeamSection from "../about/TeamSection";
import CTASection from "../components/CTASection";
import ContactFooter from "../components/ContactFooter";

const AboutPage = () => {
  return (
    <div>
     <AboutHero />
     <CompanyTimeline />
     <MissionValues />
      <TeamSection />
     <AboutStats />
     <CTASection />
   <ContactFooter />
    
    </div>
  );
};

export default AboutPage;