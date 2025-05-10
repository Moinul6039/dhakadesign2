import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div 
      className="group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white h-full flex flex-col"
      onClick={() => onClick(project)}
    >
      <div className="relative overflow-hidden h-64">
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-10"></div>
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
          width="800"
          height="600"
        />
        {project.featured && (
          <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full z-20">
            Featured
          </div>
        )}
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <div className="mb-3 flex items-center">
          <span className="text-xs font-medium bg-blue-100 text-blue-800 rounded-full px-2.5 py-0.5">
            {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
          </span>
          <span className="mx-2 text-gray-400">•</span>
          <span className="text-xs text-gray-500">{project.year}</span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="text-gray-600 mb-4 flex-grow">{project.shortDescription}</p>
        
        <div className="flex items-center justify-between mt-auto">
          <span className="text-sm text-gray-700">{project.location}</span>
          <span className="text-sm font-medium text-blue-600 group-hover:underline">View Details</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;