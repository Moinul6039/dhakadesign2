import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn, X } from 'lucide-react';

const images = [
  { src: '/images/lalmia.jpg', title: 'Ayesha Nurul Lake serenity' },
  { src: '/images/Prokash (1).jpg', title: 'Mannan South Symphony' },
  { src: '/images/anil.jpg', title: 'Salema Zoha Royel park residence' },
  { src: '/images/saidur rahman.jpg', title: 'Project 4' },
  { src: '/images/ANISUR.jpg', title: 'Project 5' },
  { src: '/images/ANWER.jpg', title: 'Project 6' },
  { src: '/images/ROBIUL.jpg', title: 'Project 7' },
  { src: '/images/THANDO.jpg', title: 'Project 8' },
  { src: '/images/STORIED.jpeg', title: 'Project 9' },
  { src: '/images/SANOYAR.jpeg', title: 'Project 10' },
  { src: '/images/DUPLEX.jpeg', title: 'Project 11' },
  { src: '/images/KABIL.jpeg', title: 'Project 12' },
  { src: '/images/STORIDE2.jpeg', title: 'Project 13' },
  { src: '/images/ANOWERsir.jpg', title: 'Project 14' },
  { src: '/images/NAZRUL.jpg', title: 'Project 15' },
  { src: '/images/ISMAIL.jpg', title: 'Project 16' },
  { src: '/images/IMG.jpg', title: 'Project 17' },
  { src: '/images/MOSTOFA.jpg', title: 'Project 18' },
];

// Example heights for a masonry effect
const masonryHeights = [
  'h-64', 'h-80', 'h-72', 'h-96', 'h-60', 'h-80', 'h-72', 'h-64', 'h-96'
];

const GallerySection: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<typeof images[0] | null>(null);
  const imagesPerPage = 6;

  // Pagination logic
  const totalPages = Math.ceil(images.length / imagesPerPage);
  const startIndex = (currentPage - 1) * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;
  const currentImages = images.slice(startIndex, endIndex);

  const handlePrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  const openModal = (img: typeof images[0]) => {
    setSelectedImage(img);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = '';
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Gallery</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our collection of project images and design inspirations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentImages.map((img, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => openModal(img)}
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{img.title}</h3>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-black/50 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn size={24} className="text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {images.length > imagesPerPage && (
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
        {modalOpen && selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 animate-fade-in"
            onClick={closeModal}
          >
            <div
              className="relative max-w-6xl w-full mx-4 p-4"
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
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 rounded-b-lg">
                  <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h3>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection; 