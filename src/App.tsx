import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import ProgramShowcase from "./components/ProgramShowcase";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function App() {
  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBF9] text-[#121212] selection:bg-[#121212] selection:text-[#FBFBF9]" id="app-root">
      {/* Premium Sticky Header */}
      <Header onScrollToSection={handleScrollToSection} />

      {/* Main Exhibition Promotional Pages */}
      <main className="flex-1">

        {/* Hero Banner Section */}
        <div className="scroll-mt-24" id="hero-wrapper">
          <Hero onScrollToPrograms={() => handleScrollToSection("programs")} />
        </div>

        {/* Core Stats Overview */}
        <div className="scroll-mt-24" id="about-wrapper">
          <Stats />
        </div>

        {/* Detailed Interactive Program Showcase */}
        <div className="scroll-mt-24" id="programs-wrapper">
          <ProgramShowcase />
        </div>

        {/* FAQ Accordion Section */}
        <div className="scroll-mt-24" id="faq-wrapper">
          <FAQ />
        </div>

      </main>

      {/* Understated Brand Footer */}
      <Footer onScrollToSection={handleScrollToSection} />
    </div>
  );
}
