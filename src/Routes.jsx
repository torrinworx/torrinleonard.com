import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import SEO from "./Components/SEO";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Collision from "./Components/Collision/Collision"

import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";
import ComingSoon from "./Pages/ComingSoon";
import OrbKingdom from "./Pages/OrbKingdom";


const AppRoutes = () => {
  return (
    <Router>
      <SEO />
      <Header />
      <Routes>
        <Route path="/" element={<Collision children={<Home />} />} />
        <Route path="/contact" element={<Collision children={<Contact />} />} />
        <Route path="/games" element={<Collision children={<ComingSoon />} />} />
        <Route path="/contact" element={<Collision children={<ComingSoon />} />} />
        <Route path="/orbkingdom" element={<OrbKingdom />} />

        {/* Add more routes here */}

        {/* Catch-all route for undefined paths */}
        <Route path="*" element={<Collision children={<NotFound />} />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
