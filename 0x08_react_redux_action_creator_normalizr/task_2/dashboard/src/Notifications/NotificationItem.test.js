import React from "react";
import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem";

describe("NotificationItem Component", () => {
  test("renders without crashing", () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.exists()).toBe(true);
  });

  test("renders correct type and value", () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.find("li").prop("data-notification-type")).toEqual(
      "default"
    );
    expect(wrapper.text()).toEqual("test");
  });

  test("renders correct HTML", () => {
    const htmlContent = { __html: "<u>test</u>" };
    const wrapper = shallow(
      <NotificationItem type="default" html={htmlContent} />
    );
    expect(wrapper.html()).toContain("<u>test</u>");
  });
});
