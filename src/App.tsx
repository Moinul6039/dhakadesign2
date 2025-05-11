import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import ProjectTypes from './components/ProjectTypes';
import AboutSection from './components/AboutSection';
import GallerySection from './components/GallerySection';
import ProjectHandoverSection from './components/ProjectHandoverSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = "Dhaka Design - Sustainable Architecture";
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ProjectTypes />
        <ProjectsSection />
        <AboutSection />
        <GallerySection />
        <ProjectHandoverSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;