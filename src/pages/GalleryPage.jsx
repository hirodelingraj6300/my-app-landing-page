import React, { useState } from "react";
import GalleryHero from "../gallery/GalleryHero";
import GalleryFilter from "../gallery/GalleryFilter";
import GalleryGrid from "../gallery/GalleryGrid";
import GalleryLightbox from "../gallery/GalleryLightbox";
import TestimonialSection from "../components/TestimonialSection";
import StatsProof from "../components/StatsProof";
import CTASection from "../components/CTASection";
import ContactFooter from "../components/ContactFooter";


const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  // Use fixed Unsplash image URLs (not the random endpoint)
  const allImages = [
    {
      url: "/about_img/about_img_1.jpg",
      category: "Construction",
      title: "Modern Construction Site",
    },
    {
      url: "/gallery_img/gall_bed_2.jpg",
      category: "Interior",
      title: "Sunlit Living Room",
    },
    {
      url: "/gallery_img/gall_bed_3.jpg",
      category: "Interior",
      title: "Minimal Kitchen",
    },
    {
      url: "/gallery_img/gall_cont_2.jpg",
      category: "Construction",
      title: "Facade & Structure",
    },
    {
      url: "/gallery_img/gall_vastu_3.jpg",
      category: "Vastu",
      title: "Serene Temple Garden",
    },
    {
      url: "/gallery_img/gall_vastu_4.jpg",
      category: "Vastu",
      title: "Harmonious Entrance",
    },
    {
      url: "/gallery_img/gall_vastu_5.jpg",
      category: "Vastu",
      title: "Serene Temple Garden",
    },
    {
      url: "/gallery_img/gall_vastu_1.jpg",
      category: "Vastu",
      title: "Harmonious Entrance",
    },
    
  ];

  return (
    <>
      <GalleryHero />

      <GalleryFilter
        activeCategory={activeCategory}
        onFilterChange={(cat) => setActiveCategory(cat)}
      />

      <GalleryGrid
        images={allImages}
        activeCategory={activeCategory}
        onImageClick={(url) => setSelectedImage(url)}
      />

      <GalleryLightbox
        selectedImage={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
      <TestimonialSection />
    <StatsProof />
    <CTASection />
    <ContactFooter />
      
    </>
  );
};

export default GalleryPage;
