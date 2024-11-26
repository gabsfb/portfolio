// src/components/Projects/Project1.js
import React from 'react';
import './Project1.css';

import img1 from '../../images/project1_sidebanner.png'; // Example path for an image
import video from '../../images/video1.mp4'; // Example path for the video

import unity_icon from '../../images/unity-icon.png';
import blender_icon from '../../images/blender-icon.png';
import krita_icon from '../../images/krita-icon.png';


const Project1 = () => {
  return (
    <div className="project1-container">
      {/* First Container */}
      <div className="project1-row">
        {/* First Column */}
        <div className="project1-column-1">
          <img src={img1} alt="Image 1" className="project1-image" />
        </div>

        {/* Second Column */}
        <div className="project1-column-2">
          <h1 className="project-header">Map Design</h1>
          <h3 className="project-subheader">A world designed from scratch</h3>

          <p>
          For this project, I was required to design and build a prototype of  MOBA game 
          map from the scratch. I started by sketching out ideas in 
           Krita, using concept art to shape the map’s overall design and style, ensuring
            it would be both visually engaging and immersive.
          </p>
           <p>Using Blender, I used procedural generation techniques to quickly create a
             variety of assets, ensuring the environment felt rich and dynamic. Once the
              models were complete, I created maps for base color, normals, and lighting, 
              adding style to the scene.</p>
          <p>
          Finally, I brought the map into Unity, where I created custom shaders and 
          materials, fine-tuning every detail to bring the world to life.
           The entire process, from concept to implementation, was completed in 2 months, 
           exhibiting a blend of creativity and technical skills.
                      
          </p>
          <h3 className="project-built-with-header">built with:</h3>

          {/* Parent container for the two squares */}
          <div className="icon-container">
            <div className="square">
              <img src={unity_icon} alt="Unity Icon" className="square-image" />
            </div>
            <div className="square-override">
              <img src={blender_icon} alt="Blender Icon" className="square-image" />
            </div>
            <div className="square-override">
              <img src={krita_icon} alt="Krita Icon" className="square-image" />
            </div>
          </div>

          <video src={video} loop autoPlay muted className="project1-video" />
        </div>
      </div>
    </div>
  );
};

export default Project1;
