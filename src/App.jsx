import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import InteriorPage from "./pages/InteriorPage";
import ConstructionPage from "./pages/ConstructionPage";


export default function App() {
  return (
    <Router>
      {/* Header always visible */}
      <Header />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/construction" element={<ConstructionPage />} />
        <Route path="/interiors" element={<InteriorPage />} />
        {/* <Route path="/vastu" element={<VastuPage />} /> */}
      </Routes>
    </Router>
  );
}
