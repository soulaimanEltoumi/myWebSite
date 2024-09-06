import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import ContactPage from "./pages/Contactpage";
import AboutPage from "./pages/aboutMepage";
import PortfolioPage from "./pages/portfoliopage";


export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/about-me" element={<AboutPage/>} />
        <Route path="/portfolio" element={<PortfolioPage/>} /> 
        
      </Routes>
    </>
  );
}
