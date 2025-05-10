import React, { useState } from 'react';

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
  const [modalOpen, setModalOpen] = useState(false);
  const [activeImg, setActiveImg] = useState<string | null>(null);

  const openModal = (src: string) => {
    setActiveImg(src);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveImg(null);
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white h-full flex flex-col"
              onClick={() => openModal(img.src)}
            >
              <div className="relative overflow-hidden h-72">
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-10"></div>
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-gray-900">{img.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 animate-fade-in" onClick={closeModal}>
          <div className="relative max-w-3xl w-full p-4" onClick={e => e.stopPropagation()}>
            <button
              className="absolute top-2 right-2 bg-black bg-opacity-60 hover:bg-opacity-80 text-white rounded-full p-2 z-10"
              onClick={closeModal}
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <img src={activeImg!} alt="Large gallery" className="w-full max-h-[80vh] object-contain rounded-lg shadow-2xl" />
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection; 