// src/actions/notificationActionCreators.test.js
import {
  markAsRead,
  setNotificationFilter,
} from "./notificationActionCreators";

import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters,
} from "./notificationActionTypes";

describe("notificationActionCreators", () => {
  // test for the markAsread action
  it("should create an action to mark as read with 1 as an arg", () => {
    const index = 1;
    const expectedAction = {
      type: MARK_AS_READ,
      index,
    };
    expect(markAsRead(index)).toEqual(expectedAction);
  });
  //  test for the setNotificationFilter action
  it("should create an action to set notification filter filter arg should return DEFAULT", () => {
    const filter = NotificationTypeFilters.DEFAULT;
    const expectedAction = {
      type: SET_TYPE_FILTER,
      filter,
    };
    expect(setNotificationFilter(filter)).toEqual(expectedAction);
  });
});
