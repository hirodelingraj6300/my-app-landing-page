import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import InteriorPage from "./pages/InteriorPage";
import ConstructionPage from "./pages/ConstructionPage";
import VastuPage from "./pages/VastuPage";
import AboutPage from "./pages/AboutPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";


export default function App() {
  return (
    <Router>
      {/* Header always visible */}
      <Header />

      {/* Routes */}
     <ScrollToTop /> 
      <Routes>
        
        <Route path="/" element={<LandingPage />} />
        <Route path="/construction" element={<ConstructionPage />} />
        <Route path="/interiors" element={<InteriorPage />} />
        <Route path="/vastu" element={<VastuPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
       {/* Toast container (works globally) */}
      <ToastContainer position="top-right" autoClose={3000} />
    </Router>
  );
}
