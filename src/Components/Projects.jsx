// src/Components/Projects.js
import React from 'react';
import { projectData } from '../Data/projectData';

const Projects = () => {
  return (
    <div className="projects-container" id='projects'>
      <h1 className='section-heading'>Projects</h1>
      <div className="projects-list">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <h2 className="project-title">{project.name}</h2>
            <p className="project-description">{project.description}</p>
            <div className="project-details">
              <span><strong>Technologies:</strong> {project.technologies.join(', ')}</span>
              <span><strong>Tools:</strong> {project.tools.join(', ')}</span>
              <span><strong>Role:</strong> {project.role}</span>
            </div>
            <div className="project-links">
              {project.demoLink && <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-link">Demo</a>}
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">GitHub</a>
            </div>
          </div>
        ))}
      </div>
      <a href="https://github.com/Saksham052003" target="_blank" rel="noopener noreferrer" className="more-projects-link">View More Projects</a>
    </div>
  );
};

export default Projects;
