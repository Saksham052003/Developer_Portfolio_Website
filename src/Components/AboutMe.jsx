import React from 'react';
import { personalData } from '../Data/personalData';

const AboutMe = () => {
  return (
    <div className="about-container" id="about">
      <h1 className="section-heading">About Me</h1>
      <div className="about-box">
        <h2 className="sub-heading">Who I am?</h2>
        <p className="description">{personalData.description}</p>
      </div>
    </div>
  );
};

export default AboutMe;
