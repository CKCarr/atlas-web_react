// src/reducers/uiReducer.js

// import all the actions that you created in the file actions/uiActionTypes
import {
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "../actions/uiActionTypes";

// define the initial state of the reducer for the UI:
const initialState = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {},
};

// Create a reducer function named uiReducer that will manage the state of the UI.
const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    // DISPLAY_NOTIFICATION_DRAWER should set isNotificationDrawerVisible to true
    case DISPLAY_NOTIFICATION_DRAWER:
      return {
        ...state,
        isNotificationDrawerVisible: true,
      };
    // HIDE_NOTIFICATION_DRAWER should set isNotificationDrawerVisible to false
    case HIDE_NOTIFICATION_DRAWER:
      return {
        ...state,
        isNotificationDrawerVisible: false,
      };
    // LOGIN_SUCCESS should set isUserLoggedIn to true
    case LOGIN_SUCCESS:
      return {
        ...state,
        isUserLoggedIn: true,
      };
    // LOGIN_FAILURE should set isUserLoggedIn to false
    case LOGIN_FAILURE:
      return {
        ...state,
        isUserLoggedIn: false,
      };
    // LOGOUT should set isUserLoggedIn to false
    case LOGOUT:
      return {
        ...state,
        isUserLoggedIn: false,
      };
    // default should return the state
    default:
      return state;
  }
};

export default uiReducer;
