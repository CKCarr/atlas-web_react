// src/reducers/notificationReducer.js
import { fromJS } from "immutable";
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters,
} from "../actions/notificationActionTypes";
import { notificationsNormalizer } from "../schema/notifications";

// Create default state
const initialState = fromJS({
  notifications: {},
  filter: NotificationTypeFilters.DEFAULT,
});

// Write a reducer function
const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      const normalizedNotifications = fromJS(
        notificationsNormalizer(action.data)
      );
      return state.mergeIn(["notifications"], normalizedNotifications);
    case MARK_AS_READ:
      return state.setIn(
        ["notifications", action.index.toString(), "isRead"],
        true
      );
    case SET_TYPE_FILTER:
      return state.set("filter", action.filter);
    default:
      return state;
  }
};

export default notificationReducer;
