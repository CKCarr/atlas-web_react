import React, { useState } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  defaultRow: {
    backgroundColor: "#f5f5f5ab",
    textAlign: "left",
    borderCollapse: "collapse",
    borderColor: "#deb5b545",
  },
  headerRow: {
    backgroundColor: "#deb5b545",
    textAlign: "left",
    borderCollapse: "collapse",
    borderColor: "black",
  },
  th: {
    fontWeight: "bold",
    padding: "5px",
  },
  td: {
    padding: "10px",
  },
  rowChecked: {
    backgroundColor: "#e6e4e4",
  },
  checkbox: {
    marginRight: "10px",
  },
});

const CourseListRow = ({
  isHeader = false,
  textFirstCell,
  textSecondCell = null,
  className = "",
}) => {
  // if isHeader style header cell otherwise default row
  const styleRow = isHeader
    ? styles.headerRow
    : isChecked
    ? styles.rowChecked
    : styles.defaultRow;

  // set state for checked box cell
  const [isChecked, setIsChecked] = useState(false);

  // toggle checked box styles
  const toggleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  if (isHeader) {
    if (textSecondCell === null) {
      return (
        <tr className={css(styleRow, className)}>
          <th colSpan="2" className={css(styles.th)}>
            {textFirstCell}
          </th>
        </tr>
      );
    } else {
      return (
        <tr className={css(styleRow, className)}>
          <th className={css(styles.th)}>{textFirstCell}</th>
          <th className={css(styles.th)}>{textSecondCell}</th>
        </tr>
      );
    }
  } else {
    return (
      <tr className={css(styleRow, className)}>
        <td className={css(styles.td)}>
          <input
            type="checkbox"
            className={css(styles.checkbox)}
            checked={isChecked}
            onChange={toggleCheckboxChange}
          />
          {textFirstCell}
        </td>
        <td className={css(styles.td)}>{textSecondCell}</td>
      </tr>
    );
  }
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
  className: "",
};

export default CourseListRow;