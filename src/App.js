import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./pages/AboutMe";
import Contact from "./pages/Contact";
import HireMe from "./pages/HireMe";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Services from "./pages/Services";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";
import ScrollToTop from "./components/ScrollToTop";
import LoadAnimation from "./components/LoadAnimation";
import NotFound from "./pages/NotFound";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    // the setTimeout() method allow the loader to appear for 2 seconds while the page is being rendered
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <LoadAnimation />
      ) : (
        <div className="main-content">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-me" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact-me" element={<Contact />} />
            <Route path="/hire-me" element={<HireMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ScrollToTop />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
