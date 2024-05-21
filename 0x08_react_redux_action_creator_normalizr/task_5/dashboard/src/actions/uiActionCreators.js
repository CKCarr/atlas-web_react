// src/actions/uiActionCreators.js
import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from "./uiActionTypes";

// The function login will accept email and password as arguments. It will return the action with LOGIN as a type and the user object:
export const login = (email, password) => {
  return {
    type: "LOGIN",
    user: { email, password },
  };
};

// The function logout will create the action with the type LOGOUT
export const logout = (email, password) => {
  return {
    type: "LOGOUT",
  };
};

// The function displayNotificationDrawer will create the action with the type DISPLAY_NOTIFICATION_DRAWER
export const displayNotificationDrawer = () => {
  return {
    type: "DISPLAY_NOTIFICATION_DRAWER",
  };
};

// The function hideNotificationDrawer will create the action with the type HIDE_NOTIFICATION_DRAWER
export const hideNotificationDrawer = () => {
  return {
    type: "HIDE_NOTIFICATION_DRAWER",
  };
};
