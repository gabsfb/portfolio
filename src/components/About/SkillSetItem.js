import React from "react";
import "./SkillSetItem.css";

const SkillSetItem = ({ header, dotCount, imageUrl, squareOverride, addBackground }) => {
  // Define total number of stars
  const totalStars = 5;

  // Generate an array of stars based on the dotCount prop
  const stars = Array.from({ length: totalStars }, (_, index) => (
    <i
      key={index}
      className={`fa-${index < dotCount ? "solid" : "regular"} fa-star`}
    ></i>
  ));

  return (
    <div className="skillset-item">
      {/* Square Container */}
      <div
        className={`squared ${squareOverride ? "squared-override" : ""} ${
          addBackground ? "icon-background" : ""
        }`}
      >
        <img src={imageUrl} alt={`${header} icon`} className="square-image" />
      </div>

      {/* Right Column with two rectangles */}
      <div>
        {/* Rectangle with Header */}
        <div className="rectangle header-container">
          <h3 className="header">{header}</h3>
        </div>

        {/* Rectangle with Dots */}
        <div className="rectangle dots-container">
          <div className="dots">{stars}</div>
        </div>
      </div>
    </div>
  );
};

export default SkillSetItem;
