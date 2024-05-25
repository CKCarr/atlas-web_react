// src/actions/courseActionCreators.test.js
import { bindActionCreators } from "redux";
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

// Bound the actions to the dispatch function
// wrap them in dispatch functions
// this allows to directly call action creators without needing to call dispatch
export const boundSelectCourse = (dispatch) =>
  bindActionCreators(selectCourse, dispatch);

export const boundUnSelectCourse = (dispatch) =>
  bindActionCreators(unSelectCourse, dispatch);
