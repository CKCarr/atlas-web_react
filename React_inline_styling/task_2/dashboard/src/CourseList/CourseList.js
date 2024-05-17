import React from "react";
import { StyleSheet, css } from "aphrodite";
import CourseListRow from "./CourseListRow";
import PropTypes from "prop-types";
import { CourseShape } from "./CourseShape";

const COURSE_SHAPE = CourseShape;

// Define styles using Aphrodite
const styles = StyleSheet.create({
  courseList: {
    width: "100%",
    margin: "auto",
    borderCollapse: "collapse",
    border: "2px solid #e0e0e0",
  },
});

function CourseList({ listCourses = [] }) {
  return (
    <table id="CourseList" className={css(styles.courseList)}>
      <thead>
        <CourseListRow isHeader textFirstCell="Available courses" />
        <CourseListRow
          isHeader
          textFirstCell="Course name"
          textSecondCell="Credit"
        />
      </thead>
      <tbody>
        {listCourses.length === 0 ? (
          <CourseListRow textFirstCell="No course available yet" />
        ) : (
          listCourses.map((course) => (
            <CourseListRow
              key={course.id}
              textFirstCell={course.name}
              textSecondCell={course.credit}
            />
          ))
        )}
      </tbody>
    </table>
  );
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(COURSE_SHAPE),
};

export default CourseList;
