// src/actions/notificationActionCreators.js
import { bindActionCreators } from "redux";
import { MARK_AS_READ, SET_TYPE_FILTER } from "./notificationActionTypes";

// Create the action creators

// The function markAsread will accept index as argument
export const markAsRead = (index) => {
  return {
    type: MARK_AS_READ,
    index,
  };
};

// The function setNotificationFilter will accept filter as argument
export const setNotificationFilter = (filter) => {
  return {
    type: SET_TYPE_FILTER,
    filter,
  };
};

// bind Action Creators
// wrap them in dispatch functions
// this allows to directly call action creators without needing to call dispatch
export const boundMarkAsRead = (dispatch) =>
  bindActionCreators(markAsRead, dispatch);

export const boundSetNotificationFilter = (dispatch) =>
  bindActionCreators(setNotificationFilter, dispatch);
