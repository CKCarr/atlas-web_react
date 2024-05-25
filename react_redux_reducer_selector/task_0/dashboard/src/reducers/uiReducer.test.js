// src/reducers/uiReducer.test.js
// Create a test file named uiReducer.test.js that will test the uiReducer.

import uiReducer from "./uiReducer";
import { SELECT_COURSE } from "../actions/courseActionTypes";
import {
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "../actions/uiActionTypes";

describe("uiReducer", () => {
  const initialState = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {},
  };

  it("should return the initial state when no action is passed", () => {
    const state = uiReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it("should return the initial state when the action SELECT_COURSE is passed", () => {
    const state = uiReducer(undefined, { type: SELECT_COURSE });
    expect(state).toEqual(initialState);
  });

  it("should change isNotificationDrawerVisible to true when the action DISPLAY_NOTIFICATION_DRAWER is passed", () => {
    const expectedState = {
      ...initialState,
      isNotificationDrawerVisible: true,
    };
    const state = uiReducer(initialState, {
      type: DISPLAY_NOTIFICATION_DRAWER,
    });
    expect(state).toEqual(expectedState);
  });

  it("should change isNotificationDrawerVisible to false when the action HIDE_NOTIFICATION_DRAWER is passed", () => {
    const currentState = {
      ...initialState,
      isNotificationDrawerVisible: true,
    };
    const expectedState = {
      ...initialState,
      isNotificationDrawerVisible: false,
    };
    const state = uiReducer(currentState, { type: HIDE_NOTIFICATION_DRAWER });
    expect(state).toEqual(expectedState);
  });

  it("should change isUserLoggedIn to true when the action LOGIN_SUCCESS is passed", () => {
    const expectedState = {
      ...initialState,
      isUserLoggedIn: true,
    };
    const state = uiReducer(initialState, { type: LOGIN_SUCCESS });
    expect(state).toEqual(expectedState);
  });

  it("should change isUserLoggedIn to false when the action LOGIN_FAILURE is passed", () => {
    const expectedState = {
      ...initialState,
      isUserLoggedIn: false,
    };
    const state = uiReducer(initialState, { type: LOGIN_FAILURE });
    expect(state).toEqual(expectedState);
  });

  it("should change isUserLoggedIn to false when the action LOGOUT is passed", () => {
    const currentState = {
      ...initialState,
      isUserLoggedIn: true,
    };
    const expectedState = {
      ...initialState,
      isUserLoggedIn: false,
    };
    const state = uiReducer(currentState, { type: LOGOUT });
    expect(state).toEqual(expectedState);
  });
});
