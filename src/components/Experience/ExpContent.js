// src/components/Experience/ExpContent.js
import React from 'react';
import './ExpContent.css'; // Import the CSS for styling

const ExpContent = ({ selectedItem }) => {
  if (!selectedItem) return null; // Do nothing if no item is selected

  return (
    <div className="exp-content">
      <h1>{selectedItem.title_selected ? selectedItem.title_selected : selectedItem.title}</h1>
      <h2>{selectedItem.company}</h2>
      <h5>{selectedItem.date}</h5>
      <p>{selectedItem.description}</p>
      <p className = {selectedItem.style}>{selectedItem.content}</p>
    </div>
  );
};

export default ExpContent;
