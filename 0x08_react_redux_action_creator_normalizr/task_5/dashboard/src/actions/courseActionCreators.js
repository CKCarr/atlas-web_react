// src/actions/courseActionCreators.test.js
import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

// create two action creators that will send the two types we previously created:

// The function selectCourse will accept index as argument
export const selectCourse = (index) => {
  return {
    type: SELECT_COURSE,
    index,
  };
};

// The function unSelectCourse will accept index as argument
export const unSelectCourse = (index) => {
  return {
    type: UNSELECT_COURSE,
    index,
  };
};
