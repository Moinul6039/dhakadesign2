import React, { useEffect, useRef } from 'react';
import { X, MapPin, Calendar, Users, Tag, Ruler, Building2, Zap, Award, Leaf } from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-75 flex items-center justify-center p-4">
      <div 
        ref={modalRef}
        className="bg-white rounded-lg shadow-xl w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col animate-fade-in"
      >
        <div className="relative h-96 overflow-hidden">
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-2 transition-colors duration-300"
            aria-label="Close"
          >
            <X size={20} />
          </button>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
            <h2 className="text-4xl font-bold text-white mb-2">{project.title}</h2>
            <p className="text-lg text-gray-200">{project.shortDescription}</p>
          </div>
        </div>
        
        <div className="p-8 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Project Brief Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="text-green-600 mt-1 mr-4" size={20} />
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Location</h4>
                    <p className="text-gray-900">{project.location}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Ruler className="text-green-600 mt-1 mr-4" size={20} />
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Land Area</h4>
                    <p className="text-gray-900">{project.details.landArea}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Building2 className="text-green-600 mt-1 mr-4" size={20} />
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Number of Floors</h4>
                    <p className="text-gray-900">{project.details.floors}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Ruler className="text-green-600 mt-1 mr-4" size={20} />
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Size</h4>
                    <p className="text-gray-900">{project.details.size}</p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-6">Design Team</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Users className="text-green-600 mt-1 mr-4" size={20} />
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Architectural Designer</h4>
                    <p className="text-gray-900">{project.details.architecturalDesigner}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Users className="text-green-600 mt-1 mr-4" size={20} />
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Structural Designer</h4>
                    <p className="text-gray-900">{project.details.structuralDesigner}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Users className="text-green-600 mt-1 mr-4" size={20} />
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Electrical Designer</h4>
                    <p className="text-gray-900">{project.details.electricalDesigner}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Sustainability Features</h3>
              <div className="grid grid-cols-1 gap-4 mb-8">
                {project.details.sustainabilityFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center bg-green-50 p-3 rounded-lg">
                    <Leaf className="text-green-600 mr-3" size={20} />
                    <span className="text-gray-800">{feature}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">Energy Efficiency</h3>
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <div className="flex items-start">
                  <Zap className="text-green-600 mt-1 mr-4" size={20} />
                  <p className="text-gray-800">{project.details.energyEfficiency}</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">Certifications</h3>
              <div className="flex flex-wrap gap-3">
                {project.details.certifications.map((cert, index) => (
                  <div key={index} className="flex items-center bg-gray-50 px-4 py-2 rounded-full">
                    <Award className="text-green-600 mr-2" size={16} />
                    <span className="text-gray-800">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Project Description</h3>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {project.description}
            </p>
          </div>
        </div>
        
        <div className="p-6 border-t border-gray-200 bg-gray-50">
          <button
            onClick={onClose}
            className="w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors duration-300 font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;