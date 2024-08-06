import React from 'react';
import { skillData } from '../Data/skill-data';

const Skills = () => {
  return (
    <div className="skills-container" id='skills'>
      <h1 className='section-heading'>Skills</h1>
      <div className="skills-grid">
        {skillData.map((skill, index) => (
          <div key={index} className="skill-button">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
