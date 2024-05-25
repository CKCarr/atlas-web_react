import React from "react";
import { StyleSheet, css } from "aphrodite";
import CourseListRow from "./CourseListRow";
import PropTypes from "prop-types";
import { CourseShape } from "./CourseShape";

const styles = StyleSheet.create({
  courseList: {
    width: "100%",
    borderCollapse: "collapse",
    margin: "20px 0",
    backgroundColor: "#f8f8f8",
    boxShadow: "0 2px 3px rgba(0, 0, 0, 0.1)",
  },
  hoverRow: {
    ":hover": {
      backgroundColor: "#f9f8f9",
    },
  },
  oddRow: {
    backgroundColor: "#f2f2f2",
  },
});

const CourseList = ({ listCourses = [] }) => (
  <table className={css(styles.courseList)}>
    <thead>
      <CourseListRow isHeader={true} textFirstCell="Available courses" />
      <CourseListRow
        isHeader={true}
        textFirstCell="Course name"
        textSecondCell="Credit"
      />
    </thead>
    <tbody>
      {listCourses.length === 0 ? (
        <CourseListRow textFirstCell="No course available yet" />
      ) : (
        listCourses.map((course, index) => (
          <CourseListRow
            key={course.id}
            textFirstCell={course.name}
            textSecondCell={course.credit}
            ssName={css(
              index % 2 === 1 ? styles.oddRow : null,
              styles.hoverRow
            )}
          />
        ))
      )}
    </tbody>
  </table>
);

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

export default CourseList;
