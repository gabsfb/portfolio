import React, { useState, useEffect, useRef } from 'react';
import ExpContent from './ExpContent';
import './Experience.css';

const Experience = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [visibleContent, setVisibleContent] = useState(null); // For mobile view
  const [animationClass, setAnimationClass] = useState('');
  const mobileContentRefs = useRef({}); // Refs to dynamically store content divs

  useEffect(() => {
    if (selectedItem) {
      setAnimationClass('fade-in');
      const timer = setTimeout(() => setAnimationClass(''), 600);
      return () => clearTimeout(timer);
    }
  }, [selectedItem]);

  const handleMobileClick = (item) => {
    const isSameItem = visibleContent?.id === item.id;

    // Toggle the visibility
    setVisibleContent(isSameItem ? null : item);

    // Scroll into view if expanding
    if (!isSameItem && mobileContentRefs.current[item.id]) {
      setTimeout(() => {
        mobileContentRefs.current[item.id].scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 50); 
    }
  };

  return (
    <div className="content-section" id="experience">
      <div className="exp-header">
        <h1>SCHOOL &</h1>
        <h1>EXPERIENCE</h1>
      </div>

      <div className="exp-grid-container">
        <div>
          {/* Left Column: Experience Items List */}
          <div className="exp-items-list">
            {items.map((item) => (
              <div
                className={`clickable exp-item-card ${selectedItem?.id === item.id ? 'selected' : ''}`}
                key={item.id}
                onClick={() => setSelectedItem(item)}
              >
                <div className="card-text exp-item-content">
                  <h2>{item.title}</h2>
                  <p>{item.date}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="courses-certifications">
            <h3 className="rhombus rhombus-filled">Courses & Certifications</h3>
            <div className="course-item spaced-content">
              <p className="course-title">Pega Certified System Architect</p>
              <p className="course-type">Certification</p>
            </div>
            <div className="course-item spaced-content">
              <p className="course-title">Google UX/UI</p>
              <p className="course-type">Course</p>
            </div>
            <div className="course-item spaced-content">
              <p className="course-title">Unity Associate Programmer</p>
              <p className="course-type">Course</p>
            </div>
          </div>
        </div>

        {/* Right Column: Selected Experience Details */}
        <div className={`exp-content-container ${animationClass} content-${selectedItem?.id || ''}`}>
          {selectedItem ? (
            <ExpContent selectedItem={selectedItem} />
          ) : (
            <p className="empty-label">Select a position to learn more</p>
          )}
        </div>
      </div>

      {/* Mobile Container */}
      <div className="experience-mobile-container">
        <div className="exp-items-list">
          {items.map((item) => (
            <div
              className={`clickable exp-item-card ${visibleContent?.id === item.id ? 'selected' : ''}`}
              key={item.id}
              onClick={() => handleMobileClick(item)}
              ref={(el) => (mobileContentRefs.current[item.id] = el)} // Store the ref
            >
              <div className="card-text exp-item-content">
                <h2>{item.title}</h2>
                <p>{item.date}</p>
              </div>

              {/* Mobile Expanded Content */}
              {visibleContent?.id === item.id && (
                <div className="exp-content-mobile exp-content">
                  <h1>{item.title_selected ? item.title_selected : item.title}</h1>
                  <h2>{item.company}</h2>
                  <h5>{item.date}</h5>
                  <p>{item.description}</p>
                  <p className={item.style}>{item.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
