import React from 'react';
import { Leaf, Home, Building2, LandPlot, Wind } from 'lucide-react';

const AboutSection: React.FC = () => {
  const principles = [
    {
      icon: <Leaf className="text-blue-600" size={24} />,
      title: 'Environmental Impact',
      description: 'We prioritize designs that minimize carbon footprint, energy consumption, and waste generation throughout the building\'s lifecycle.'
    },
    {
      icon: <Home className="text-blue-600" size={24} />,
      title: 'Human Comfort',
      description: 'Our designs create healthy, comfortable spaces that enhance wellbeing through natural light, proper ventilation, and connection to nature.'
    },
    {
      icon: <Building2 className="text-blue-600" size={24} />,
      title: 'Innovative Materials',
      description: 'We explore and implement sustainable, recycled, and locally-sourced materials that reduce environmental impact while maintaining durability.'
    },
    {
      icon: <LandPlot className="text-blue-600" size={24} />,
      title: 'Site Integration',
      description: 'Each project is thoughtfully designed to harmonize with its surrounding landscape, respecting local ecosystems and natural features.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Approach</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We believe that sustainable architecture is not just about using eco-friendly materials, 
            but about creating harmonious relationships between buildings, people, and the planet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {principles.map((principle, index) => (
                <div key={index} className="p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow duration-300">
                  <div className="mb-4">{principle.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{principle.title}</h3>
                  <p className="text-gray-600">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 md:order-2 relative">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
              <img 
                src="/images/DUPLEX.jpeg" 
                alt="Sustainable architecture project" 
                className="absolute inset-0 w-full h-full object-cover transform scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <div className="inline-flex items-center px-6 py-3 bg-blue-600 rounded-lg text-white font-medium mb-4 shadow-lg">
                  <Wind size={24} className="mr-3" />
                  Sustainable Design
                </div>
                <h3 className="text-3xl font-bold text-white drop-shadow-lg">Emerald Heights Residence</h3>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-blue-100 rounded-full -z-10 opacity-80"></div>
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-blue-200 rounded-full -z-10 opacity-80"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;