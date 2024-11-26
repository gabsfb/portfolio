import React, { useEffect, useState } from 'react';
import './Modal.css';

// Import all project components
import Project1 from './Project1';
import Project2 from './Project2';
import Project3 from './Project3';
import Project4 from './Project4';
import Project5 from './Project5';

const Modal = ({ onClose, selectedProject }) => {
  const [isClosing, setIsClosing] = useState(false);

  // Function to handle the Escape key press
  const handleKeydown = (event) => {
    if (event.key === 'Escape') {
      handleClose(); // Trigger close with animation
    }
  };

  // Use useEffect to add no-scroll class and keydown event listener when modal is open
  useEffect(() => {
    document.body.classList.add('no-scroll');
    document.addEventListener('keydown', handleKeydown);

    // Cleanup function to remove no-scroll class and event listener when modal is closed
    return () => {
      document.body.classList.remove('no-scroll');
      document.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  // Function to handle close with animation
  const handleClose = () => {
    setIsClosing(true); // Trigger the closing animation
    setTimeout(onClose, 300); // Delay closing until the animation finishes
  };

  // Render the correct component based on the selectedProject string
  let ProjectComponent;

  switch (selectedProject) {
    case 'project1':
      ProjectComponent = Project1;
      break;
    case 'project2':
      ProjectComponent = Project2;
      break;
    case 'project3':
      ProjectComponent = Project3;
      break;
    case 'project4':
      ProjectComponent = Project4;
      break;
    case 'project5':
      ProjectComponent = Project5;
      break;
    default:
      ProjectComponent = null;
  }

  return (
    <div className={`modal-overlay ${isClosing ? 'closing' : ''}`} onClick={handleClose}>
      <div
        className={`modal ${isClosing ? 'slide-out' : 'slide-in'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={handleClose}>
          <i className="fa-solid fa-xmark"></i>
        </button>
        
        <div className="modal-content">
          {ProjectComponent && <ProjectComponent />}
        </div>
      </div>
    </div>
  );
};

export default Modal;
