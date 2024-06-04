import { fromJS } from "immutable";
import {
    filterTypeSelected,
    getNotifications,
    getUnreadNotifications,
} from "./notificationSelector";

describe("notificationSelector", () => {
    const initialState = fromJS({
        notifications: {
            1: {
                id: 1,
                type: "default",
                value: "New course available",
                isRead: false,
            },
            2: { id: 2, type: "urgent", value: "New resume available", isRead: true },
            3: { id: 3, type: "urgent", value: "New data available", isRead: false },
        },
        filter: "DEFAULT",
    });

    it("should return the filter type selected", () => {
        expect(filterTypeSelected(initialState)).toEqual("DEFAULT");
    });

    it("should return the list of notifications", () => {
        const notifications = getNotifications(initialState);
        expect(notifications.toJS()).toEqual({
            1: {
                id: 1,
                type: "default",
                value: "New course available",
                isRead: false,
            },
            2: { id: 2, type: "urgent", value: "New resume available", isRead: true },
            3: { id: 3, type: "urgent", value: "New data available", isRead: false },
        });
    });

    it("should return the list of unread notifications", () => {
        const unreadNotifications = getUnreadNotifications(initialState);
        expect(unreadNotifications.toJS()).toEqual({
            1: {
                id: 1,
                type: "default",
                value: "New course available",
                isRead: false,
            },
            3: { id: 3, type: "urgent", value: "New data available", isRead: false },
        });
    });
});
