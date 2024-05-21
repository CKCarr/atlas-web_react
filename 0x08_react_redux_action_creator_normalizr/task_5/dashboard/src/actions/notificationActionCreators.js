// src/actions/notificationActionCreators.js
import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters,
} from "./notificationActionTypes";

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
