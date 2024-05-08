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
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });

  // verify that Notifications renders the text Here is the list of notifications
  test('renders the text "Here is the list of notifications"', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.contains("Here is the list of notifications")).toBe(true);
  });
});

describe("Notifications display drawer tests", () => {
  it("menu item is displayed when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find(".menuItem").exists()).toBe(true);
    expect(wrapper.find(".Notifications").exists()).toBe(false);
  });

  it("menu item and Notifications are displayed when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find(".menuItem").exists()).toBe(true);
    expect(wrapper.find(".Notifications").exists()).toBe(true);
  });
});
