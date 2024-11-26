import React, { useState, useEffect } from 'react';
import ExpContent from './ExpContent';
import './Experience.css';

const Experience = () => {
  // Define the state for the selected item, initialized as null
  const [selectedItem, setSelectedItem] = useState(null);

  // Items data for the exp_items list (can be static or fetched)
  const items = [
    {
      id: 1,
      title: 'mechatronics engineer degree',
      title_selected: 'Mechatronics Engineer',
      company: 'Instituto Tecnologico De Estudios Superiores De Monterrey',
      date: 'Aug 2013 - December 2018',
      description: 'Graduated as a Mechatronics Engineer from ITESM, where I built a solid foundation in mechanic, control systems, and programming. Some of the projects I developed include:',
      style:"list-content",
      content: (
        <div>        
          <div>
            <h3>automated greenhouse</h3>
            <p>Developed an automated greenhouse using C++ to program a microchip that senses light, temperature, and humidification and adjusts actuators based on the data to optimize the conditions plant growth.</p>
          </div>
          <div>
            <h3>fire detector Camera</h3>
            <p>Created a real-time fire detection system using C++ and OpenCV. The program processes camera images, applies filters, and detects fire by analyzing visual patterns, providing an early warning system for fire hazards.</p>
          </div>
          <div>
            <h3>autonomous vehicle</h3>
            <p>Built an autonomous car using Python and OpenCV. By utilizing filters and path and shape recognition algorithms, the system controls the vehicle to stay on course and avoid collisions.</p>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: 'intership',
      company: 'Biomechatronics Lab',
      date: 'Jan 2018 - Dec 2018',
      description: 'As an intern in a biomechanics lab, I developed a computer vision system to analyze joint movements of patients in post-prosthetic therapy, combining Kinect and MATLAB for data capture and processing to assist the patient assessments and therapy tracking.',
      style: "list-content",
      content: (
        <div>        
          <div>
            <h3>responsabilities</h3>
            <p>Develop a computer vision system to analyze joint movements for therapy.
            </p>
            <p>Build a functional prototype.
            </p>
            <p>Test the prototype with real patients.
            </p>
          </div>
          <div>
            <h3>achievements</h3>
            <p>Gathered movement data from multiple patients to refine the system.</p>
            <p>Enhanced tracking accuracy by integrating Kinect technology.</p>
            <p>Completed comprehensive documentation of system improvements.</p>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: 'design & programming engineer',
      company: 'Alive Digital Audio & Video',
      date: 'Jan 2019 - Dec 2019',
      description: 'As a Systems Designer & Programmer, I developed smart control systems for a variety of applications, including private residences, commercial establishments, and entertainment venues. I focused on system optimization through upgrades, updates, and preventive maintenance.',
      style: "list-content",
      content: (
        <div>        
          <div>
            <h3>responsabilities</h3>
            <p>Design & program custom smart control systems.</p>
            <p>Perform system updates, upgrades, and preventive maintenance to ensure optimal performance and security.</p>
          </div>
          <div>
            <h3>achievements</h3>
            <p>Delivered successful services on a new, unfamiliar platform within the first week.</p>
            <p>Designed and programmed 6 new client projects.</p>
            <p>Managed ongoing support for up to 15+ clients weekly.</p>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: 'software engineer',
      company: 'Rulesware LLC',
      date: 'March 2020 - Present ',
      description: 'As a Software Engineer, I develop web-based applications, focusing on BPM software and system integration. I have experience working across the full stack, from front-end to back-end, and collaborate on API integration and data management in agile working teams to deliver solutions that produce value.',
      style: "list-content",
      content: (
        <div>        
          <div>
            <h3>responsabilities</h3>
            <p>Develop web-based applications, focusing on BPM solutions.
            </p>
            <p>Write technical documentation </p>
            <p>Conduct unit & scenario testing.
            </p>
            <p>Work on development requirements across the full stack.
            </p>
            <p>Collaborate in an Agile development environment.
            </p>
          </div>
          <div>
            <h3>achievements</h3>
            <p>Contributed to projects in insurance, finance, and healthcare applications.
            </p>
            <p>Revamped the company website, enhancing online presence.
            </p>
            <p>Developed tools to optimize operations efficiency.
            </p>
            <p>Earned Pega System Architect certification.</p>
          </div>
        </div>
      )
    }
  ];

  // State to track when animation should be applied
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    if (selectedItem) {
      // Add animation class when selectedItem changes
      setAnimationClass('fade-in');

      // Reset the animation class after 600ms to prepare for the next change
      const timer = setTimeout(() => setAnimationClass(''), 600); // 600ms to match the animation duration

      return () => clearTimeout(timer); // Cleanup the timeout when the component is unmounted or updated
    }
  }, [selectedItem]); // Trigger when selectedItem changes

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
                onClick={() => setSelectedItem(item)}  // When clicked, set selectedItem
              >
                <div className="card-text exp-item-content">
                  <h2>{item.title}</h2>
                  <p>{item.date}</p>
                </div>
              </div>
            ))}

          </div>

          <div className="courses-certifications">
            <h3 className=' rhombus rhombus-filled'>Courses & Certifications</h3>
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
            <p className = "empty-label">Select a position to learn more</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Experience;
