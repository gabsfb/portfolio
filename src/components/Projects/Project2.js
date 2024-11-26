// src/components/Projects/Project2.js 
import React from 'react';
import './Project2.css'; // Import CSS for styling
import projectimage1 from '../../images/project2_portfolio.png';
import icon1 from '../../images/wordpress-icon.webp';
import icon2 from '../../images/elementor-icon.png';
import icon3 from '../../images/js-icon.png';

const Project2 = () => {
  return (
    <div className="project2-container">
      <div className="project2-content">
        {/* Right Column: Image */}
        <div className="project2-column-1">
          <img src={projectimage1} className="image-website" alt="Project 2 Preview" />
        </div>
        {/* Left Column */}
        <div className="project2-column-2">
          <h1 className="project2-header">Website Redesign</h1>
          <h3 className="project-subheader">A fresh digital presence for a new era.</h3>

          
          {/* Project Description */}
          <div className="project2-paragraphs">
            <p>
            As part of an effort to boost our company’s brand and presence, I led development 
            of our new website. I was in charge of the entire process, from designing the 
            site and its features to bringing them to life.
            </p>
            <p>
            This project was a key piece in strengthening the company's online presence and supporting 
            our transformation. The website was designed to enhance user experience, improve 
            navigation, and align with the company’s new brand identity.
            </p>
          </div>

          {/* Built With Section */}
          <h3 className="project-built-with-header">built with:</h3>
          <div className="icon-container">
            <div className="square">
            <img src={icon1} alt="WordPress Icon" className="square-image" />
            </div>
            <div className="square">
            <img src={icon2} alt="Elementor Icon" className="square-image" />
            </div>
            <div className="square">
            <img src={icon3} alt="JavaScript Icon" className="square-image" />
            </div>
          </div>

          {/* Button */}
          <a
            href="https://rulesware.com"
            target="_blank"
            rel="noopener noreferrer"
            className="project2-button"
          >
            Check the website
          </a>
        </div>

        
      </div>
    </div>
  );
};

export default Project2;
