import React from "react";
import { mount } from "enzyme";
import App from "./App";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";

describe("App", () => {
  let wrapper;
  const mockLogOut = jest.fn();
  const alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});

  beforeEach(() => {
    wrapper = mount(<App logOut={mockLogOut} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
    wrapper.unmount();
  });

  it("contains Notifications component", () => {
    expect(wrapper.find(Notifications).exists()).toBe(true);
  });

  it("contains Header component", () => {
    expect(wrapper.find(Header).exists()).toBe(true);
  });

  it("contains Footer component", () => {
    expect(wrapper.find(Footer).exists()).toBe(true);
  });

  it("does not display CourseList when isLoggedIn is false", () => {
    expect(wrapper.find(Login).exists()).toBe(true);
    expect(wrapper.find(CourseList).exists()).toBe(false);
  });

  it("does not contain Login component when isLoggedIn is true", () => {
    wrapper.setProps({ isLoggedIn: true });
    expect(wrapper.find(Login).exists()).toBe(false);
    expect(wrapper.find(CourseList).exists()).toBe(true);
  });

  it("calls logOut and alerts when ctrl+h is pressed", () => {
    // Simulate ctrl+h key press
    const event = new KeyboardEvent("keydown", { key: "h", ctrlKey: true });
    document.dispatchEvent(event);

    expect(mockLogOut).toHaveBeenCalled();
    expect(alertMock).toHaveBeenCalledWith("Logging you out");
  });
});
