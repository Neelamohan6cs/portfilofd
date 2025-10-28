import React from "react";
import Sidebar from "./pages/Sidebar";
import AboutSection from "./pages/AboutSection";
import EducationSection from "./pages/Education";
import Workshops from "./pages/Workshops";
import Skills from "./pages/Skills";
import Internships from "./pages/Internships";

import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import ExtActivity from "./pages/ExtActivity";

export default function MainLayout() {
  return (
    <div className="wrapper">
      <aside className="sidebar">
        <Sidebar />
      </aside>
      <div className="content">
        <AboutSection />
        <ExtActivity />
        <Skills />
        <EducationSection />
        <Workshops />
        
        <Internships />
        
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
