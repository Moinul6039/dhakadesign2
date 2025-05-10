import React from 'react';
import { Building2, Home, Landmark, Lightbulb } from 'lucide-react';

const ProjectTypes: React.FC = () => {
  const projectTypes = [
    {
      icon: <Home size={40} className="text-blue-600" />,
      title: 'Residential',
      description: 'Sustainable homes and apartment complexes that prioritize comfort and energy efficiency.',
      features: [
        'Single-family homes',
        'Multi-unit residential buildings',
        'Eco-friendly apartments',
        'Smart home integration'
      ],
      image: 'images/lalmia.jpg'
    },
    {
      icon: <Building2 size={40} className="text-blue-600" />,
      title: 'Commercial',
      description: 'Energy-efficient office buildings and retail spaces designed for productivity and sustainability.',
      features: [
        'Office buildings',
        'Retail centers',
        'Mixed-use developments',
        'Green building certification'
      ],
      image: 'images/anil.jpg'
    },
    {
      icon: <Landmark size={40} className="text-blue-600" />,
      title: 'Public',
      description: 'Community-focused spaces that combine functionality with environmental responsibility.',
      features: [
        'Educational facilities',
        'Cultural centers',
        'Healthcare buildings',
        'Government facilities'
      ],
      image: 'images/ISMAIL.jpg'
    },
    {
      icon: <Lightbulb size={40} className="text-blue-600" />,
      title: 'Conceptual',
      description: 'Innovative architectural concepts pushing the boundaries of sustainable design.',
      features: [
        'Future-focused designs',
        'Experimental concepts',
        'Research projects',
        'Sustainable innovations'
      ],
      image: 'images/STORIDE2.jpeg'
    }
   
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Project Types</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our diverse portfolio of sustainable architecture projects across different sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectTypes.map((type, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64">
                <img 
                  src={type.image} 
                  alt={type.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="text-white text-center">
                    {type.icon}
                    <h2 className="text-2xl font-bold mt-4">{type.title}</h2>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-6">{type.description}</p>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Features:</h3>
                <ul className="space-y-3">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectTypes;