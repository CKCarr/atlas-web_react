// src/BodySection/BodySectionWithMarginBottom.js
import React from "react";
import PropTypes from "prop-types";
import BodySection from "./BodySection";
import "./BodySectionWithMarginBottom.css"; // Ensure the CSS file is created and imported

function BodySectionWithMarginBottom(props) {
  return (
    <div className="bodySectionWithMargin">
      <BodySection {...props} />
    </div>
  );
}

BodySectionWithMarginBottom.propTypes = {
  ...BodySection.propTypes, // Reuse propTypes from BodySection
};

export default BodySectionWithMarginBottom;
