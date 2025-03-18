// src/components/Projects/Project3.js
import React from 'react';
import './Project3.css';

import project3Image from '../../images/project3_portfolio.png';
import icon1 from '../../images/blender-icon.png';
import icon2 from '../../images/unity-icon.png';
import icon3 from '../../images/krita-icon.png';
import xIcon from '../../x-twitter-icon.svg';

const Project3 = () => {
  return (
    <div className="project3-container">
      {/* First Column */}
      <div className="project3-left-column">
        <img
          src={project3Image}
          alt="Project Showcase"
          className="project3-image"
        />
      </div>

      {/* Second Column */}
      <div className="project3-right-column">
        <h1 className="project3-header">Recreating <span className="highlight">VFX</span> AND <span className="highlight">MECHANICS</span></h1>
        
        <p className="project3-description">
  I started recreating game VFX and mechanics in Unity to sharpen my game dev skills.  
  It’s a fun challenge that helps me understand how complex effects and gameplay  
  elements are built. Check out my X for a closer look at the process!
</p>


        <div className="project3-built-with">
          <p>Built with:</p>
          <div className="icon-container">
            <img src={icon2} alt="Unity" className="icon-unity" />
            <img src={icon1} alt="Blender" className="icon-blender" />
            <img src={icon3} alt="Krita" className="square-icon" />
          </div>
        </div>

        {/* CTA Row */}
        <a href="https://x.com/gfloresdev" target="_blank" rel="noopener noreferrer" className="project3-cta">
          <img src={xIcon} alt="X (Twitter)" className="icon-class" />
          <span className="cta-text">
            Check out my latest posts →
          </span>
        </a>

      </div>
    </div>
  );
};

export default Project3;
