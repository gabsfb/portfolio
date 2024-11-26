// src/components/Projects/Project3.js
// ------------------------------------------------------------   BOSS FIGHT DEMO
import React from 'react';
import './Project3.css';

import img1 from '../../images/p1_img1.png'; // Example path for an image

import icon1 from '../../images/blender-icon.png';
import icon2 from '../../images/unity-icon.png';

const Project3 = () => {
  return (
    <div className="project3-container">
      <h1 className="project3-header">Boss Fight Demo</h1>

      <div className="project3-content">
        {/* First Row */}
        <div className="project3-row">
          <div className="project3-column">

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet risus et lectus 
                ultricies, et dictum sem bibendum.
              </p>


              <div className="project3-built-with">

              <p>Built with:</p>
              
              <div className="project1-icons">
                <img src={icon1} alt="Blender" className="icon-blender" />
                <img src={icon2} alt="Unity" className="icon-unity" />
              </div>
              
            </div>

          </div>

        </div>

            

        {/* Second Row with two sub-rows */}
        <div className="project3-image-row">
          <img src={img1} alt="Project Image 1" className="project3-image" />
          <img src={img1} alt="Project Image 2" className="project3-image" />
          <img src={img1} alt="Project Image 3" className="project3-image" />
        </div>
        <div className="project3-button-row">
          
          <a
            href="https://gfloresb.itch.io/boss-fight"
            target="_blank"
            rel="noopener noreferrer"
            className="project3-button"
          >
            Play Web Version
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project3;
