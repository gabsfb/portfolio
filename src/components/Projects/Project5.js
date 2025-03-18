import React from 'react';
import './Project5.css';

import video_p5 from '../../images/torre_prev.mp4';

import p5_1 from '../../images/p5_img_1.png';
import p5_2 from '../../images/p5_img_2.png';
import p5_3 from '../../images/p5_img_3.png';
import p5_4 from '../../images/p5_img_4.png';
import p5_5 from '../../images/p5_img_5.png';

import icon1 from '../../images/blender-icon.png';
import icon2 from '../../images/krita-icon.png';

const Project5 = () => {
  return (
    <div className="project5-container">
      <div className="project5-row">
        <div className="project5-column-1">
          <h1 className="project5-header">Asset <span className="highlight">Creation</span>:</h1>
          <h3 className="project5-subheader">From <span className="highlight">Concept</span> to <span className="highlight">Completion</span></h3>
          <p className="project5-paragraph">
          This project showcases my journey of bringing a 3D asset to life, starting from a simple idea and evolving through each stage of the creative process. From sketching initial concepts to crafting detailed models, applying materials, and perfecting the final touches, every step was an opportunity to refine my skills and bring the vision to reality. The focus was on blending creativity with technical precision to achieve a polished, professional-quality result.</p>
          <h3 className="project-built-with-header">built with:</h3>
          <div className="icon-container">
            <div className="square">
              <img src={icon1} alt="Blender Icon" className="square-image" />
            </div>
            <div className="square">
              <img src={icon2} alt="Krita Icon" className="square-image" />
            </div>
          </div>

          <h3 className="project-built-with-header">stages:</h3>
          <div className="project5-images-container">
            <div className="image-with-caption">
              <img src={p5_1} alt="Sketch Idea" className="image image-1" />
              <div className="caption-container">
                <h3>sketch Idea</h3>
                <span className="arrow-icon">&gt;</span> {/* Arrow icon */}
              </div>
            </div>
            <div className="image-with-caption">
              <img src={p5_2} alt="Concept Draw" className="image image-2" />
              <div className="caption-container">
                <h3>concept Draw</h3>
                <span className="arrow-icon">&gt;</span> {/* Arrow icon */}
              </div>
            </div>
            <div className="image-with-caption">
              <img src={p5_3} alt="3D Model" className="image image-3" />
              <div className="caption-container">
                <h3>3D Model</h3>
                <span className="arrow-icon">&gt;</span> {/* Arrow icon */}
              </div>
            </div>
            <div className="image-with-caption">
              <img src={p5_4} alt="Materials" className="image image-4" />
              <div className="caption-container">
                <h3>Materials</h3>
                <span className="arrow-icon">&gt;</span> {/* Arrow icon */}
              </div>
            </div>
            <div className="image-with-caption">
              <img src={p5_5} alt="Details" className="image image-5" />
              <div className="caption-container caption-5">
                <h3>Details</h3>
                
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (30%) */}
        <div className="project5-column-2">
          <video 
            src={video_p5} 
            loop 
            autoPlay 
            muted 
            className="project5-video video-offset"
          />
        </div>
      </div>
    </div>
  );
};

export default Project5;
