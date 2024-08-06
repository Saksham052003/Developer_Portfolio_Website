import React from 'react';
import { personalData } from '../Data/personalData';
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container" id='footer'>
      <div className="footer-content">
        <p>© Developer Portfolio by {personalData.name}</p>
        <p >Email: <spain className='email'>{personalData.email}</spain></p>
        <p>Phone: {personalData.phone}</p>
        <p>Address: {personalData.address}</p>
        <div className="footer-social-icons">
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
      </div>
    </footer>
  );
};

export default Footer;
