import React from 'react';
import { educations } from '../Data/educationData'; // Make sure to update the path as needed

const Education = () => {
  return (
    <div className="education-container" id="education">
      <h1 className="section-heading">Education</h1>
      <div className="education-list">
        {educations.map((edu) => (
          <div key={edu.id} className="education-card">
            <h2 className="education-title">{edu.title}</h2>
            <p className="education-duration">{edu.duration}</p>
            <p className="education-institution">{edu.institution}</p>
            <p className="education-grade">{edu.Grade}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
