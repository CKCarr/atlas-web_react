import React from "react";
import PropTypes from "prop-types";

// Define the styles as constants outside the component function
const headerStyle = {
  backgroundColor: "#deb5b545", // Light brown with alpha transparency
};

const rowStyle = {
  backgroundColor: "#f5f5f5ab", // Light grey with alpha transparency
};

function CourseListRow({
  isHeader = false,
  textFirstCell,
  textSecondCell = null,
}) {
  if (isHeader) {
    if (textSecondCell === null) {
      return (
        <tr style={headerStyle}>
          <th colSpan="2">{textFirstCell}</th>
        </tr>
      );
    } else {
      return (
        <tr style={headerStyle}>
          <th>{textFirstCell}</th>
          <th>{textSecondCell}</th>
        </tr>
      );
    }
  } else {
    return (
      <tr style={rowStyle}>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </tr>
    );
  }
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CourseListRow;
