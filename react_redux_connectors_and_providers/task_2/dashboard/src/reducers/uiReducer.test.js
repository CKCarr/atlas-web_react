// src/reducers/uiReducer.test.js
// Create a test file named uiReducer.test.js that will test the uiReducer.

import uiReducer from "./uiReducer";
import { Map } from "immutable";
import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "../actions/uiActionTypes";

describe("uiReducer", () => {
  const initialState = Map({
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {},
  });

  it("should return the initial state when no action is passed", () => {
    expect(uiReducer(undefined, {}).toJS()).toEqual(initialState.toJS());
  });

  it("should return the initial state when the action SELECT_COURSE is passed", () => {
    expect(uiReducer(undefined, { type: "SELECT_COURSE" }).toJS()).toEqual(
      initialState.toJS()
    );
  });

  it("should handle DISPLAY_NOTIFICATION_DRAWER", () => {
    expect(
      uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER }).toJS()
    ).toEqual(initialState.set("isNotificationDrawerVisible", true).toJS());
  });

  it("should handle HIDE_NOTIFICATION_DRAWER", () => {
    expect(
      uiReducer(undefined, { type: HIDE_NOTIFICATION_DRAWER }).toJS()
    ).toEqual(initialState.set("isNotificationDrawerVisible", false).toJS());
  });

  it("should handle LOGIN_SUCCESS", () => {
    expect(uiReducer(undefined, { type: LOGIN_SUCCESS }).toJS()).toEqual(
      initialState.set("isUserLoggedIn", true).toJS()
    );
  });

  it("should handle LOGIN_FAILURE", () => {
    expect(uiReducer(undefined, { type: LOGIN_FAILURE }).toJS()).toEqual(
      initialState.set("isUserLoggedIn", false).toJS()
    );
  });

  it("should handle LOGOUT", () => {
    expect(uiReducer(undefined, { type: LOGOUT }).toJS()).toEqual(
      initialState.set("isUserLoggedIn", false).toJS()
    );
  });
});
