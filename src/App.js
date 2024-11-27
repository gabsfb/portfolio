// src/App.js
import React from 'react';
import './App.css';
import './styles/global.css';
import './styles/mobile.css';

// Import the new section components
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Menu from './components/Menu/Menu';
import CTA from './components/CTA/CTA';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';









const App = () => {
    
    


    
    return (
        <div className="gradient-background">
            {/* Render the menu and section components */}
            <Menu />
            <About />
            <Experience />
            <Projects />
            <CTA />
            <ScrollToTopButton />
        </div>
    );
};

export default App;
