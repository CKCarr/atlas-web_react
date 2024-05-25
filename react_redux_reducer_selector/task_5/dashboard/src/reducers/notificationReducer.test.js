import { fromJS } from "immutable";
import notificationReducer from "./notificationReducer";
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters,
} from "../actions/notificationActionTypes";

describe("notificationReducer", () => {
  const initialState = fromJS({
    notifications: {},
    filter: NotificationTypeFilters.DEFAULT,
  });

  it("should return the initial state when no action is passed", () => {
    expect(notificationReducer(undefined, {}).toJS()).toEqual(
      initialState.toJS()
    );
  });

  it("should handle FETCH_NOTIFICATIONS_SUCCESS", () => {
    const data = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      { id: 3, type: "urgent", value: "New data available" },
    ];
    const action = { type: FETCH_NOTIFICATIONS_SUCCESS, data };
    const expectedState = initialState.mergeIn(
      ["notifications"],
      fromJS({
        1: {
          id: 1,
          type: "default",
          value: "New course available",
          isRead: false,
        },
        2: {
          id: 2,
          type: "urgent",
          value: "New resume available",
          isRead: false,
        },
        3: {
          id: 3,
          type: "urgent",
          value: "New data available",
          isRead: false,
        },
      })
    );

    expect(notificationReducer(undefined, action).toJS()).toEqual(
      expectedState.toJS()
    );
  });

  it("should handle MARK_AS_READ", () => {
    const initialStateWithNotifications = initialState.mergeIn(
      ["notifications"],
      fromJS({
        1: {
          id: 1,
          type: "default",
          value: "New course available",
          isRead: false,
        },
        2: {
          id: 2,
          type: "urgent",
          value: "New resume available",
          isRead: false,
        },
        3: {
          id: 3,
          type: "urgent",
          value: "New data available",
          isRead: false,
        },
      })
    );
    const action = { type: MARK_AS_READ, index: 2 };
    const expectedState = initialStateWithNotifications.setIn(
      ["notifications", "2", "isRead"],
      true
    );

    expect(
      notificationReducer(initialStateWithNotifications, action).toJS()
    ).toEqual(expectedState.toJS());
  });

  it("should handle SET_TYPE_FILTER", () => {
    const action = {
      type: SET_TYPE_FILTER,
      filter: NotificationTypeFilters.URGENT,
    };
    const expectedState = initialState.set(
      "filter",
      NotificationTypeFilters.URGENT
    );

    expect(notificationReducer(undefined, action).toJS()).toEqual(
      expectedState.toJS()
    );
  });
});
