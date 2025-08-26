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

const VastuPage = () => {
  return (
    <div>
      <HeroSection />
      <AboutVastu />
      <ServicesSection />
      <BenefitsSection />
      <MainDoorDirection />
      <CaseStudies />
      <Testimonials />
      <Stats  />
      <FAQSection />
      <ContactFooter />
    </div>
  );
};

export default VastuPage;
