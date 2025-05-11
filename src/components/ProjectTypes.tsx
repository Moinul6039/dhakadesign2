import React, { useState } from 'react';
import { Building2, Home, Landmark, Lightbulb, ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';

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

const ProjectTypes: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedType, setSelectedType] = useState<typeof projectTypes[0] | null>(null);
  const typesPerPage = 6;

  // Pagination logic
  const totalPages = Math.ceil(projectTypes.length / typesPerPage);
  const startIndex = (currentPage - 1) * typesPerPage;
  const endIndex = startIndex + typesPerPage;
  const currentTypes = projectTypes.slice(startIndex, endIndex);

  const handlePrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  const openModal = (type: typeof projectTypes[0]) => {
    setSelectedType(type);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const closeModal = () => {
    setModalOpen(false);
    setSelectedType(null);
    document.body.style.overflow = '';
  };

  return (
    <section className="py-20 bg-gray-50" id="project-types">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Project Types</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our diverse portfolio of sustainable architecture projects across different sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentTypes.map((type, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer bg-white"
              onClick={() => openModal(type)}
            >
              <div className="relative h-64">
                <img
                  src={type.image}
                  alt={type.title}
                  className="w-full h-full object-cover transform scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white text-center transform scale-110">
                    {type.icon}
                    <h2 className="text-2xl font-bold mt-4">{type.title}</h2>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-black/50 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn size={24} className="text-white" />
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6 line-clamp-2">{type.description}</p>
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

        {/* Pagination Controls */}
        {projectTypes.length > typesPerPage && (
          <div className="flex justify-center items-center mt-12 space-x-4">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={`flex items-center px-4 py-2 rounded-lg ${
                currentPage === 1
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              } transition-colors duration-300`}
            >
              <ChevronLeft size={20} className="mr-2" />
              Previous
            </button>
            <span className="text-gray-600">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`flex items-center px-4 py-2 rounded-lg ${
                currentPage === totalPages
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              } transition-colors duration-300`}
            >
              Next
              <ChevronRight size={20} className="ml-2" />
            </button>
          </div>
        )}

        {/* Modal/Lightbox */}
        {modalOpen && selectedType && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 animate-fade-in"
            onClick={closeModal}
          >
            <div
              className="relative max-w-3xl w-full mx-4 p-4"
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 bg-black bg-opacity-60 hover:bg-opacity-80 text-white rounded-full p-2 z-10 transition-colors duration-300"
                onClick={closeModal}
                aria-label="Close"
              >
                <X size={24} />
              </button>
              <div className="relative">
                <img
                  src={selectedType.image}
                  alt={selectedType.title}
                  className="w-full max-h-[60vh] object-contain rounded-lg shadow-2xl"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 rounded-b-lg">
                  <h3 className="text-2xl font-bold text-white mb-2">{selectedType.title}</h3>
                  <p className="text-gray-200 mb-2">{selectedType.description}</p>
                  <h4 className="text-lg font-semibold text-blue-200 mb-2">Key Features:</h4>
                  <ul className="space-y-2">
                    {selectedType.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-white">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectTypes;