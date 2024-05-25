import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";

describe("Notifications Component Tests", () => {
  it("Renders correctly with empty or no listNotifications", () => {
    const wrapper = shallow(
      <Notifications listNotifications={[]} displayDrawer={true} />
    );
    expect(wrapper.find(NotificationItem).length).toBe(1);
    expect(wrapper.find(NotificationItem).dive().text()).toContain(
      "No new notification for now"
    );
  });

  it("Renders correctly if listNotifications is not provided", () => {
    const wrapperNoList = shallow(<Notifications displayDrawer={true} />);
    expect(wrapperNoList.find(NotificationItem).length).toBe(1);
    expect(wrapperNoList.find(NotificationItem).dive().text()).toContain(
      "No new notification for now"
    );
  });

  it("Renders with listNotifications", () => {
    const listNotifications = [
      { id: 1, type: "default", value: "New course available" },
      {
        id: 2,
        type: "urgent",
        html: { __html: "<strong>Urgent requirement</strong>" },
      },
    ];

    const wrapper = shallow(
      <Notifications
        listNotifications={listNotifications}
        displayDrawer={true}
      />
    );
    expect(wrapper.find(NotificationItem).length).toBe(2);
  });

  it('Does not show "Here is the list of notifications" when notifications are empty', () => {
    const wrapperEmpty = shallow(<Notifications listNotifications={[]} />);
    expect(wrapperEmpty.text()).not.toContain(
      "Here is the list of notifications"
    );
  });

  it("calls markNotificationAsRead when a notification is clicked", () => {
    const listNotifications = [
      { id: 1, type: "default", value: "New course available" },
    ];
    const mockMarkAsRead = jest.fn();

    const wrapper = shallow(
      <Notifications
        listNotifications={listNotifications}
        displayDrawer={true}
        markNotificationAsRead={mockMarkAsRead}
      />
    );

    wrapper.find(NotificationItem).prop("markAsRead")();
    expect(mockMarkAsRead).toHaveBeenCalledWith(1);
  });
});
