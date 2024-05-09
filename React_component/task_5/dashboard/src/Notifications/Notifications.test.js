import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";

describe("Notifications Component Tests", () => {
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

    it("does not show 'Here is the list of notifications' when notifications are empty", () => {
      const wrapper = shallow(<Notifications listNotifications={[]} />);
      expect(wrapper.text()).not.toContain("Here is the list of notifications");
    });

    it("does not rerender with the same listNotifications", () => {
      const spy = jest.spyOn(React, "useState"); // Spy on the useState hook

      const wrapper = shallow(
        <Notifications listNotifications={listNotifications} />
      );

      // Update the props with the same listNotifications
      wrapper.setProps({ listNotifications: listNotifications });

      expect(spy).toHaveBeenCalledTimes(1); // Should not have rerendered
      spy.mockRestore(); // Restore the spy
    });

    it("rerenders with a longer listNotifications", () => {
      const spy = jest.spyOn(React, "useState"); // Spy on the useState hook

      const wrapper = shallow(
        <Notifications listNotifications={listNotifications} />
      );

      // Update the props with a longer listNotifications
      const longerList = [
        ...listNotifications,
        { id: 3, type: "default", value: "Another notification" },
      ];
      wrapper.setProps({ listNotifications: longerList });

      expect(spy).toHaveBeenCalledTimes(2); // Should have rerendered
      spy.mockRestore(); // Restore the spy
    });
  });
});
