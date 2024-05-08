import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";

describe("Notifications Component", () => {
  // test that Notifications renders without crashing
  test("renders without crashing", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });
  // test that Notifications renders without crashing
  test("renders three list items", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });

  // verify that Notifications renders the text Here is the list of notifications
  test('renders the text "Here is the list of notifications"', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.contains("Here is the list of notifications")).toBe(true);
  });
});
