import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";

describe("Notifications Component Tests", () => {
  it("Renders correctly with empty or no listNotifications", () => {
    const wrapper = shallow(
      <Notifications listNotifications={[]} displayDrawer={true} />
    );
    console.log(wrapper.debug());
    expect(wrapper.find(NotificationItem).length).toBe(1);
    expect(wrapper.find(NotificationItem).dive().text()).toContain(
      "No new notification for now"
    );
  });

  it("Renders correctly if listNotifications is not provided", () => {
    const wrapperNoList = shallow(<Notifications displayDrawer={true} />);
    console.log(wrapperNoList.debug());
    expect(wrapperNoList.find(NotificationItem).length).toBe(1);
    expect(wrapperNoList.find(NotificationItem).dive().text()).toContain(
      "No new notification for now"
    ); // this passes
    // expect(wrapperNoList.text()).toContain("No new notification for now"); // this fails
  });

  it("Rendering with listNotifications", () => {
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
    console.log(wrapper.debug());
    expect(wrapper.find(NotificationItem).length).toBe(2);
  });

  it('Does not show "Here is the list of notifications" when notifications are empty', () => {
    const wrapperEmpty = shallow(<Notifications listNotifications={[]} />);
    console.log(wrapperEmpty.debug());
    expect(wrapperEmpty.text()).not.toContain(
      "Here is the list of notifications"
    );
  });
});
