// src/components/About/About.js
import React from "react";
import SkillSetItem from "./SkillSetItem"; // Import the SkillSetItem component
import "./About.css";

import cpp_icon from '../../images/cpp-icon.png';
import cs_icon from '../../images/cs-icon.svg';
import python_icon from '../../images/python-icon.webp';
import javascript_icon from '../../images/js-icon.png';
import react_icon from '../../images/react-icon.webp';
import unity_icon from '../../images/unity-icon.png';
import blender_icon from '../../images/blender-icon.png';
import elementor_icon from '../../images/elementor-icon.png';
import wordpress_icon from '../../images/wordpress-icon.webp';
import github_icon from '../../images/github-icon.png';
import plastic_icon from '../../images/palstic-scm.png';
import firebase_icon from '../../images/firebase-icon.png';
import figma_icon from '../../images/figma-icon.png';

import personaje from '../../images/personaje.png';


const About = () => {
  return (
    <div className="content-section" id="about">
      {/* Header */}
      <h1 className="about-header">About Me</h1>

      {/* Main Container */}
      <div className="about-container">
        {/* Left Column */}
        <div className="about-left-column">
        
          <p className="about-paragraph">
          
          Starting my career in mechatronics, I worked on  
          automation for domotics applications, gaining valuable hands-on 
          experience with complex projects. Over time, my passion for software
          development grew, leading me to transition into web apps development,
          where I could blend my technical background with new skills in 
          building digital solutions.
          </p>
          <p className="about-paragraph">
          For the past 7+ years, I’ve focused on refining my skills and expanding 
          my toolkit to create innovative solutions. Outside of work, I enjoy 
          video games, exercising, and tackling new challenges, all of which fuel
          my creativity and problem-solving 
          skills.
          </p>
          </div>
          

        {/* Right Column */}
        <div className="about-right-column">
          {/* My Skill Set */}
          <div className="about-component">
            <h2 className="component-title">Skill Set</h2>
            <div className="component-content skillset-grid">
            {/* Skill Set Items */}
            
            <SkillSetItem header="C#" dotCount={4} imageUrl={cs_icon} />
            <SkillSetItem header="Python" dotCount={3} imageUrl={python_icon} />
            <SkillSetItem header="C++" dotCount={3} imageUrl={cpp_icon} />
            
            <SkillSetItem header="Javascript" dotCount={4} imageUrl={javascript_icon} />
            <SkillSetItem header="Figma" dotCount={4} imageUrl={figma_icon} />
            <SkillSetItem header="React" dotCount={3} imageUrl={react_icon} />
            
            <SkillSetItem header="Unity" dotCount={3} imageUrl={unity_icon} />
            <SkillSetItem header="Blender" dotCount={3} imageUrl={blender_icon} squareOverride={true} />
            <SkillSetItem header="Elementor" dotCount={5} imageUrl={elementor_icon} />
            <SkillSetItem header="WordPress" dotCount={5} imageUrl={wordpress_icon} />
            <SkillSetItem header="GitHub" dotCount={5} imageUrl={github_icon} squareOverride={true} addBackground={true} />
            <SkillSetItem header="PlasticSCM" dotCount={3} imageUrl={plastic_icon} />
            <SkillSetItem header="Firebase" dotCount={2} imageUrl={firebase_icon} />
          </div>

          </div>

          {/* Core Values and Interests */}
          <div className="about-component-row">
            <div className="about-component half-width">
              <h2 className="component-title">Core Values</h2>
              <ul className="component-content about-list">
                <li>Responsibility</li>
                <li>Quality</li>
                <li>Self-Motivation</li>
                <li>Adaptability</li>
                <li>Teamwork</li>
                <li>Integrity</li>
              </ul>
            </div>
            <div className="about-component half-width">
              <h2 className="component-title">Interests</h2>
              <ul className="component-content about-list">
                <li>Exercise</li>
                <li>Sports</li>
                <li>Tech Insights</li>
                <li>Video Games</li>
                <li>Art</li>
                <li>Food</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
