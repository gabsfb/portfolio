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
           
                <ul className="portfolio-list">
                <li className="rhombus rhombus-hoverable clickable" onClick={() => scrollToSection('about')}>
                    <span className="hover-line">about me</span>
                </li>
                <li className="rhombus rhombus-hoverable clickable" onClick={() => scrollToSection('experience')}>
                    <span className="hover-line">professional experience</span>
                </li>
                <li className="rhombus rhombus-hoverable clickable" onClick={() => scrollToSection('projects')}>
                    <span className="hover-line">portfolio / projects</span>
                </li>
                <li className="rhombus rhombus-hoverable clickable" onClick={() => scrollToSection('cta')}>
                    <span className="hover-line">contact me</span>
                </li>
            </ul>

              
            </div>


        </div>
    );
};

export default Menu;
