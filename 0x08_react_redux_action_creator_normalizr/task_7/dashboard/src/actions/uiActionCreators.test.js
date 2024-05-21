// src/actions/uiActionCreators.test.js
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "jest-fetch-mock";

import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
  loginSuccess,
  loginFailure,
  loginRequest,
} from "./uiActionCreators";

import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "./uiActionTypes";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("uiActionCreators", () => {
  // test login
  it("should create an action to logout", () => {
    const email = "test@examplemail.com";
    const password = "test123PASS";
    const expectedAction = {
      type: LOGIN,
      user: { email, password },
    };
    expect(login(email, password)).toEqual(expectedAction);
  });
  //  test logout
  it("should create an action to logout", () => {
    const expectedAction = {
      type: LOGOUT,
    };
    expect(logout()).toEqual(expectedAction);
  });
  // test displayNotificationDrawer
  it("should create an action to displayNotificationDrawer", () => {
    const expectedAction = {
      type: DISPLAY_NOTIFICATION_DRAWER,
    };
    expect(displayNotificationDrawer()).toEqual(expectedAction);
  });
  // test hideNotificationDrawer
  it("should create an action to hideNotificationDrawer", () => {
    const expectedAction = {
      type: HIDE_NOTIFICATION_DRAWER,
    };
    expect(hideNotificationDrawer()).toEqual(expectedAction);
  });
});

describe("uiActionCreators with async actions", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("creates LOGIN and LOGIN_SUCCESS when login is successful", () => {
    fetchMock.mockResponseOnce(JSON.stringify({ success: true }));

    const expectedActions = [
      {
        type: LOGIN,
        user: { email: "test@example.com", password: "password" },
      },
      { type: LOGIN_SUCCESS },
    ];
    const store = mockStore({});

    return store
      .dispatch(loginRequest("test@example.com", "password"))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it("creates LOGIN and LOGIN_FAILURE when login fails", () => {
    fetchMock.mockRejectOnce(new Error("Login failed"));

    const expectedActions = [
      {
        type: LOGIN,
        user: { email: "test@example.com", password: "password" },
      },
      { type: LOGIN_FAILURE },
    ];
    const store = mockStore({});

    return store
      .dispatch(loginRequest("test@example.com", "password"))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
