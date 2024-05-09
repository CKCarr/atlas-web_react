import React from "react";
import { shallow } from "enzyme";

import Notifications from "../Notifications/Notifications";
import NotificationItem from "../Notifications/NotificationItem";

describe("Notifications Component Tests", () => {
  describe("Rendering with empty or no listNotifications", () => {
    const listNotifications = [];

    it("renders correctly with an empty array", () => {
      const wrapper = shallow(
        <Notifications listNotifications={listNotifications} />
      );
      expect(wrapper.find(NotificationItem).length).toBe(0);
      expect(wrapper.text()).toContain("No new notification for now");
    });

    it("renders correctly if listNotifications is not provided", () => {
      const wrapper = shallow(<Notifications />);
      expect(wrapper.find(NotificationItem).length).toBe(0);
      expect(wrapper.text()).toContain("No new notification for now");
    });
  });

  describe("Rendering with listNotifications", () => {
    const listNotifications = [
      { id: 1, type: "default", value: "New course available" },
      {
        id: 2,
        type: "urgent",
        html: { __html: "<strong>Urgent requirement</strong>" },
      },
    ];

    it("renders the correct number of notifications", () => {
      const wrapper = shallow(
        <Notifications listNotifications={listNotifications} />
      );
      expect(wrapper.find(NotificationItem).length).toBe(2);
    });

    it('does not show "Here is the list of notifications" when notifications are empty', () => {
      const wrapper = shallow(<Notifications listNotifications={[]} />);
      expect(wrapper.text()).not.toContain("Here is the list of notifications");
    });
  });
});

// test using Enzyme and Jest
describe("Notifications", () => {
  it("should call markAsRead on item click", () => {
    const markAsReadMock = jest.fn();
    const wrapper = shallow(<NotificationItem markAsRead={markAsReadMock} />);
    wrapper.find("li").simulate("click");
    expect(markAsReadMock).toHaveBeenCalled();
  });
});
