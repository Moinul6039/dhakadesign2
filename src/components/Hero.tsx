import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{ 
        backgroundImage: 'url(https://images.pexels.com/photos/2506988/pexels-photo-2506988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Sustainable Architecture for a <span className="text-blue-400">Dhaka Design</span>
        </h1>
        <p className="text-xl md:text-2xl text-white opacity-90 mb-8 max-w-3xl mx-auto">
          Innovative designs that harmonize with nature, minimize environmental impact, and create beautiful spaces for living and working.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button 
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-300 text-lg font-medium"
            onClick={scrollToProjects}
          >
            View Projects
          </button>
          <button className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-blue-800 text-white rounded-md transition-all duration-300 text-lg font-medium">
            Learn More
          </button>
        </div>
      </div>
      
      <button 
        onClick={scrollToProjects}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        aria-label="Scroll to projects"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};

export default Hero;