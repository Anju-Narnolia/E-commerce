import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
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
        </Routes>
      <Footer />
    </>
  );
}

export default App;
