// src/components/Projects/Card.js
import React from 'react';
import './Card.css';

const Card = ({ className, title, description, onClick, image }) => {
  return (
    <div className={`card ${className}`} onClick={onClick}>

      {image && <img src={image} alt={title} className="card-image" />}
      
      <div className="card-content card-text">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
