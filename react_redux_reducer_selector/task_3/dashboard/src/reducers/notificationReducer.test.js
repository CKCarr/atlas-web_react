import notificationReducer from "./notificationReducer";
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters,
} from "../actions/notificationActionTypes";

describe("notificationReducer", () => {
  const initialState = {
    notifications: [],
    filter: NotificationTypeFilters.DEFAULT,
  };

  it("should return the initial state when no action is passed", () => {
    expect(notificationReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle FETCH_NOTIFICATIONS_SUCCESS", () => {
    const data = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      { id: 3, type: "urgent", value: "New data available" },
    ];
    const action = { type: FETCH_NOTIFICATIONS_SUCCESS, data };
    const expectedState = {
      ...initialState,
      notifications: data.map((notification) => ({
        ...notification,
        isRead: false,
      })),
    };

    expect(notificationReducer(undefined, action)).toEqual(expectedState);
  });

  it("should handle MARK_AS_READ", () => {
    const initialStateWithNotifications = {
      filter: NotificationTypeFilters.DEFAULT,
      notifications: [
        {
          id: 1,
          type: "default",
          value: "New course available",
          isRead: false,
        },
        { id: 2, type: "urgent", value: "New resume available", isRead: false },
        { id: 3, type: "urgent", value: "New data available", isRead: false },
      ],
    };
    const action = { type: MARK_AS_READ, index: 2 };
    const expectedState = {
      filter: NotificationTypeFilters.DEFAULT,
      notifications: [
        {
          id: 1,
          type: "default",
          value: "New course available",
          isRead: false,
        },
        { id: 2, type: "urgent", value: "New resume available", isRead: true },
        { id: 3, type: "urgent", value: "New data available", isRead: false },
      ],
    };

    expect(notificationReducer(initialStateWithNotifications, action)).toEqual(
      expectedState
    );
  });

  it("should handle SET_TYPE_FILTER", () => {
    const action = {
      type: SET_TYPE_FILTER,
      filter: NotificationTypeFilters.URGENT,
    };
    const expectedState = {
      ...initialState,
      filter: NotificationTypeFilters.URGENT,
    };

    expect(notificationReducer(undefined, action)).toEqual(expectedState);
  });
});
