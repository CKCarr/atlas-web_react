// src/reducers/notificationReducer.js
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters,
} from "../actions/notificationActionTypes";

// The default state should be an object with:
// notifications, which will store the list of notifications
// filter, which will be the attribute storing which filter is selected
const initialState = {
  notifications: [],
  filter: NotificationTypeFilters.DEFAULT,
};

// In a file notificationReducer.js, write a reducer function.
// Define the FETCH_NOTIFICATIONS_SUCCESS action
const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        notifications: action.data.map((notification) => ({
          ...notification,
          isRead: false,
        })),
      };
    case MARK_AS_READ:
      return {
        ...state,
        notifications: state.notifications.map((notification) =>
          notification.id === action.index
            ? { ...notification, isRead: true }
            : notification
        ),
      };
    case SET_TYPE_FILTER:
      return {
        ...state,
        filter: action.filter,
      };
    default:
      return state;
  }
};

export default notificationReducer;
