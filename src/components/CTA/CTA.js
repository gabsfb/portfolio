import React from "react";
import "./CTA.css";

const CTA = () => {
  return (
    <div className="cta-container">
      <h1 className="cta-header">Let's Work Together!</h1>


      <a
        href="https://www.linkedin.com/in/gabriel-flores-5955b5166/" // Replace with your LinkedIn profile URL
        target="_blank" // Open in a new tab
        rel="noopener noreferrer" // Security measure for external links
        className="cta-button"
      >
        Contact Me on LinkedIn
      </a>
    </div>
  );
};

export default CTA;
