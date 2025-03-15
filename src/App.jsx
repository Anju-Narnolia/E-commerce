import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import FAQ from "./Components/FAQ";
import Login from "./Components/Login";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import TandC from "./Components/TandC";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import "@fortawesome/fontawesome-free/css/all.min.css";
import React from "react";

import "./App.css";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tandc" element={<TandC />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
