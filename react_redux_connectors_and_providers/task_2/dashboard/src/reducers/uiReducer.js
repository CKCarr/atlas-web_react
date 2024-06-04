// src/reducers/uiReducer.js

import { Map } from "immutable";
// import all the actions that you created in the file actions/uiActionTypes
import {
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "../actions/uiActionTypes";

// define the initial state of the reducer for the UI:
const initialState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: Map({}),
});

// Create a reducer function named uiReducer that will manage the state of the UI.
const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    // DISPLAY_NOTIFICATION_DRAWER should set isNotificationDrawerVisible to true
    case DISPLAY_NOTIFICATION_DRAWER:
      return state.set("isNotificationDrawerVisible", true);
    // HIDE_NOTIFICATION_DRAWER should set isNotificationDrawerVisible to false
    case HIDE_NOTIFICATION_DRAWER:
      return state.set("isNotificationDrawerVisible", false);
    // LOGIN_SUCCESS should set isUserLoggedIn to true
    case LOGIN_SUCCESS:
      return state.set("isUserLoggedIn", true).set("user", Map(action.user));
    // LOGIN_FAILURE should set isUserLoggedIn to false
    case LOGIN_FAILURE:
      return state.set("isUserLoggedIn", false);
    // LOGOUT should set isUserLoggedIn to false
    case LOGOUT:
      return state.set("isUserLoggedIn", false).set("user", Map({}));
    // default should return the state
    default:
      return state;
  }
};

export default uiReducer;
