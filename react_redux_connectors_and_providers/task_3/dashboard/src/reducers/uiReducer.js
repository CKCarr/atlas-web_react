// src/reducers/uiReducer.js

import { Map } from "immutable";
// import all the actions that you created in the file actions/uiActionTypes
import {
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN,
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
    // LOGIN should set the user key of the state to the user that is passed in the action
    case LOGIN:
      return state.set("user", Map(action.user));
    // LOGIN_SUCCESS should set isUserLoggedIn to true and set the user key of the state to the user that is passed in the action
    case LOGIN_SUCCESS:
      return state.set("isUserLoggedIn", true).set("user", Map(action.user));
    // LOGIN_FAILURE should set isUserLoggedIn to false and set the user key of the state to an empty Map
    case LOGIN_FAILURE:
      return state.set("isUserLoggedIn", false);
    // LOGOUT should set isUserLoggedIn to false and set the user key of the state to an empty Map or null
    case LOGOUT:
      return state.set("isUserLoggedIn", false).set("user", Map({ user: null }));
    // default should return the state
    default:
      return state;
  }
};

export default uiReducer;
