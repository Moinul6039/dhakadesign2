import React, { useState } from 'react';
import { Building2, CheckCircle, ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';

const ProjectHandoverSection: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof handoverProjects[0] | null>(null);
  const projectsPerPage = 9; // Show 9 projects per page (3x3 grid)

  // This array will be populated with your project handover images
  const handoverProjects = [
    {
      id: 1,
      image: "images/project1.jpg",
      title: "Project Name 1",
      location: "Location 1",
      date: "January 2024"
    },
    {
      id: 2,
      image: "images/project2.jpg",
      title: "Project Name 2",
      location: "Location 2",
      date: "February 2024"
    },
    {
      id: 3,
      image: "images/project3.jpg",
      title: "Project Name 3",
      location: "Location 3",
      date: "March 2024"
    },
    {
      id: 4,
      image: "images/project4.jpg",
      title: "Project Name 4",
      location: "Location 4",
      date: "April 2024"
    },
    {
      id: 5,
      image: "images/project5.jpg",
      title: "Project Name 5",
      location: "Location 5",
      date: "May 2024"
    },
    {
      id: 6,
      image: "images/project6.jpg",
      title: "Project Name 6",
      location: "Location 6",
      date: "June 2024"
    },
    {
      id: 7,
      image: "images/project7.jpg",
      title: "Project Name 7",
      location: "Location 7",
      date: "July 2024"
    },
    {
      id: 8,
      image: "images/project8.jpg",
      title: "Project Name 8",
      location: "Location 8",
      date: "August 2024"
    },
    {
      id: 9,
      image: "images/project9.jpg",
      title: "Project Name 9",
      location: "Location 9",
      date: "September 2024"
    },
    {
      id: 10,
      image: "/images/handover/project10.jpg",
      title: "Project Name 10",
      location: "Location 10",
      date: "October 2024"
    },
    {
      id: 11,
      image: "/images/handover/project11.jpg",
      title: "Project Name 11",
      location: "Location 11",
      date: "November 2024"
    },
    {
      id: 12,
      image: "/images/handover/project12.jpg",
      title: "Project Name 12",
      location: "Location 12",
      date: "December 2024"
    }
  ];

  // Calculate pagination
  const totalPages = Math.ceil(handoverProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const currentProjects = handoverProjects.slice(startIndex, endIndex);

  const handlePrevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  const openModal = (project: typeof handoverProjects[0]) => {
    setSelectedProject(project);
    setModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = ''; // Restore scrolling
  };

  return (
    <section id="project-handover" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-blue-600 rounded-lg text-white font-medium mb-4">
            <CheckCircle size={24} className="mr-3" />
            Project Handover
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Completed Projects</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our successfully completed and handed over projects that showcase our commitment to excellence in sustainable architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProjects.map((project) => (
            <div 
              key={project.id}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => openModal(project)}
            >
              <div className="relative h-[300px] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-200 mb-1">{project.location}</p>
                    <p className="text-blue-300">{project.date}</p>
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
        {handoverProjects.length > projectsPerPage && (
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

        {/* Empty state when no projects are added */}
        {handoverProjects.length === 0 && (
          <div className="text-center py-12">
            <Building2 size={48} className="mx-auto text-gray-400 mb-4" />
            <p className="text-gray-600">No project handover images have been added yet.</p>
          </div>
        )}

        {/* Image Modal/Lightbox */}
        {modalOpen && selectedProject && (
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
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 rounded-b-lg">
                  <h3 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h3>
                  <p className="text-gray-200 mb-1">{selectedProject.location}</p>
                  <p className="text-blue-300">{selectedProject.date}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectHandoverSection; 