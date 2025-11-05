import React, { useState, useRef } from "react";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import Home from "./Pages/Home";

export default function App() {
  const [activeSection, setActiveSection] = useState(null);

  // Funkcija koja pronalazi sekciju po ID-u i skroluje do nje
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navigation
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
      <Home setActiveSection={setActiveSection} />
      <Footer />
    </>
  );
}
