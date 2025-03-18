// src/components/Projects/Projects.js
import React, { useState } from 'react';
import './Projects.css';
import Card from './Card';
import Modal from './Modal';

import project1Image from '../../images/project1_portfolio.png'; // Example path for an image
import project3Image from '../../images/project2_portfolio.png'; // Example path for an image
import project2Image from '../../images/project3_portfolio.png'; // Example path for an image
import project4Image from '../../images/project4_portfolio.png'; // Example path for an image
import project5Image from '../../images/project5_portfolio.png'; // Example path for an image

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="content-section" id="projects">
      <div className="projects-description">
        <h1 className="projects-header">projects</h1>
        <p>Select any project to find out more about it.</p>
      </div>

      <div className="projects-layout">
        <div className="projects-grid">
          <Card
            className="card-2x2 clickable"
            title="Map Design"
            description="Immersive world, designed from scratch"
            onClick={() => handleCardClick('project1')}
            image={project1Image}
          />
          <Card
            className="card-1x2 clickable"
            title="Website Redesign"
            description="A fresh digital presence for a new era."
            onClick={() => handleCardClick('project2')}
            image={project3Image}
          />
          <Card
            className="card-1x3 clickable p3"
            title="VFX & Mechanics"
            description="Recreating iconic mechanics."
            onClick={() => handleCardClick('project3')}
            image={project2Image}
          />
          <Card
            className="card-1x1 project-disabled"
            title="3D Render"
            description="Coming soon"
            onClick={() => handleCardClick('project4')}
            image={project4Image}
          />
          <Card
            className="card-2x1 clickable"
            title="Asset Creation"
            description="From concept to compeltion"
            onClick={() => handleCardClick('project5')}
            image={project5Image}
          />
        </div>

      </div>

      {isModalOpen && (
        <Modal
          selectedProject={selectedProject}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default Projects;






