import React from 'react';
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { personalData } from '../Data/personalData'; 

const HeroSection = () => {
  return (
    <div className="hero-container">
      <h1 className="hero-text hero-text-lg">
        Hello, <br />
        This is {' '}
        <span className="hero-name">{personalData.name},</span>
        <br></br>
        {`I'm a Fresher`}
        .
      </h1>

      <div className="social-icons">
        <a
          href={personalData.github}
          target='_blank'
          rel='noopener noreferrer'
          className="transition-all text-pink-500 hover:scale-125 duration-300"
        >
          <BsGithub size={30} />
        </a>
        <a
          href={personalData.linkedIn}
          target='_blank'
          rel='noopener noreferrer'
          className="transition-all text-pink-500 hover:scale-125 duration-300"
        >
          <BsLinkedin size={30} />
        </a>
        <a
          href={personalData.instagram}
          target='_blank'
          rel='noopener noreferrer'
          className="transition-all text-pink-500 hover:scale-125 duration-300"
        >
          <FaInstagramSquare size={30} />
        </a>
        <a
          href={personalData.twitter}
          target='_blank'
          rel='noopener noreferrer'
          className="transition-all text-pink-500 hover:scale-125 duration-300"
        >
          <FaTwitterSquare size={30} />
        </a>
      </div>

      <div className="button-container">
        <a
          href="#footer"
          className="contact-button"
        >
          Contact me
          <RiContactsFill size={16}/>
        </a>

        <a
          href={personalData.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="resume-button"
        >
          Get Resume
          <MdDownload size={16} />
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
