// src/components/ScrollToTopButton/ScrollToTopButton.js
import React, { useState, useEffect } from 'react';
import './ScrollToTopButton.css';

const ScrollToTopButton = () => {
    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = document.documentElement.scrollTop;
            const threshold = window.innerHeight / 2;
    

    
            if (scrollTop > threshold) {
                setShowScrollButton(true);
            } else {
                console.log('Hide Button');
                setShowScrollButton(false);
            }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    
    

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            id="scrollToTopBtn"
            className={`scroll-to-top ${showScrollButton ? 'show' : ''}`}
            onClick={handleScrollToTop}
        >
            <i className="fa-solid fa-arrow-up"></i>
        </button>
    );
};

export default ScrollToTopButton;
