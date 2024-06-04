// src/BodySection/BodySectionWithMarginBottom.js
import React from "react";
import PropTypes from "prop-types";
import BodySection from "./BodySection";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  bodySectionWithMargin: {
    marginBottom: "20px",
  },
});

function BodySectionWithMarginBottom(props) {
  return (
    <div className={css(styles.bodySectionWithMargin)}>
      <BodySection {...props} />
    </div>
  );
}

BodySectionWithMarginBottom.propTypes = {
  ...BodySection.propTypes, // Reuse propTypes from BodySection
};

export default BodySectionWithMarginBottom;
