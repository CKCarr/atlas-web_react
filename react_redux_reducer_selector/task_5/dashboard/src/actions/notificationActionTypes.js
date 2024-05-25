// src/actions/notificationActionTypes.js

// Create the action types
export const MARK_AS_READ = "MARK_AS_READ";
export const SET_TYPE_FILTER = "SET_TYPE_FILTER";

// Create the filter states
// They will be used when the user interacts with the notification drawer
export const NotificationTypeFilters = {
  DEFAULT: "DEFAULT",
  URGENT: "URGENT",
};

// task_3 changes
export const FETCH_NOTIFICATIONS_SUCCESS = "FETCH_NOTIFICATIONS_SUCCESS";
