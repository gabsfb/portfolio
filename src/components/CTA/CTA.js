import React from "react";
import "./CTA.css";

import xIcon from '../../x-twitter-icon.svg';
import linkedinIcon from '../../linkedin-icon.svg';
import mailIcon from '../../mail-icon.svg';

const CTA = () => {
  const email = 'mailto:gfloresb09@gmail.com';
const encodedEmail = email
  .split('')
  .map(char => `&#${char.charCodeAt(0)};`)
  .join('');

console.log(encodedEmail);

  return (
    <div className="cta-container" id="cta">
      <h1 className="cta-header">Let's Work Together!</h1>


      <h2 className="cta-subtitle">
        Contact Me
      </h2>


      <a href="https://x.com/gfloresdev" target="_blank" rel="noopener noreferrer">
          <img src={xIcon} alt="X (Twitter)" className="icon-class" />
      </a>

      <a href="https://www.linkedin.com/in/gabriel-flores-5955b5166/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" className="icon-class" />
      </a>

      <a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#103;&#102;&#108;&#111;&#114;&#101;&#115;&#98;&#48;&#57;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;">
          <img src={mailIcon} alt="Mail" className="icon-class" />
      </a>


    </div>
  );
};

export default CTA;
