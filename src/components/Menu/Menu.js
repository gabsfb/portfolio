// src/components/Menu/Menu.js
import React from 'react';
import './Menu.css';



const Menu = () => {
    // Smooth scroll to the specified section
    const scrollToSection = (sectionId) => {
        const targetElement = document.getElementById(sectionId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="menu-container">

            {/* Right column with the greeting and description */}
            <div className="text-container">
                <div className="greeting">
                    <p className="salute">Hi, I'm</p>
                    <h1 className="name1">gabriel</h1>
                    <h1 className="name2">flores</h1>
                    <p className="ocupation">Software Developer</p>
               

                    


                </div>
               
            </div>

            {/* Left column with menu items */}
            <div className="list-container">
                <hr className="line" />
                <ul className="portfolio-list">
                    <li className = "rhombus rhombus-hoverable clickable" onClick={() => scrollToSection('about')}>about me</li>
                    <li className = "rhombus rhombus-hoverable clickable" onClick={() => scrollToSection('experience')}>professional experience</li>
                    <li className = "rhombus rhombus-hoverable clickable" onClick={() => scrollToSection('projects')}>portfolio / projects</li>
                    <li className = "rhombus rhombus-hoverable clickable" onClick={() => scrollToSection('cta')}>contact me</li>
                </ul>
                <hr className="line" />
            </div>


        </div>
    );
};

export default Menu;
