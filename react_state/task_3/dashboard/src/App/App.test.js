import React, { act } from "react";
import { shallow, mount } from "enzyme";
import App from "./App";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";
import AppContext from "./AppContext";
import { listNotifications } from "./App";

describe("App", () => {
  let wrapper;
  const mockLogOut = jest.fn();
  const alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});

  beforeEach(() => {
    wrapper = mount(
      <AppContext.Provider
        value={{ user: { isLoggedIn: false }, logOut: mockLogOut }}
      >
        <App />
      </AppContext.Provider>
    );
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

  it("does not display CourseList when user is not logged in", () => {
    expect(wrapper.find(Login).exists()).toBe(true);
    expect(wrapper.find(CourseList).exists()).toBe(false);
  });

  it("does not contain Login component when user is logged in", async () => {
    await act(async () => {
      wrapper.find(App).instance().logIn("test@test.com", "password");
    });
    wrapper.update();
    expect(wrapper.find(Login).exists()).toBe(false);
    expect(wrapper.find(CourseList).exists()).toBe(true);
  });

  it("calls logOut and alerts when ctrl+h is pressed", async () => {
    // Simulate ctrl+h key press
    const event = new KeyboardEvent("keydown", { key: "h", ctrlKey: true });

    await act(async () => {
      document.dispatchEvent(event);
    });

    wrapper.update();

    expect(alertMock).toHaveBeenCalledWith("Logging you out");
  });

  it("should have default state for displayDrawer as false", () => {
    const shallowWrapper = shallow(<App />);
    expect(shallowWrapper.state().displayDrawer).toBe(false);
  });

  it("should update state to true when handleDisplayDrawer is called", () => {
    const shallowWrapper = shallow(<App />);
    shallowWrapper.instance().handleDisplayDrawer();
    expect(shallowWrapper.state().displayDrawer).toBe(true);
  });

  it("should update state to false when handleHideDrawer is called", () => {
    const shallowWrapper = shallow(<App />);
    shallowWrapper.instance().handleDisplayDrawer(); // first set it to true
    shallowWrapper.instance().handleHideDrawer(); // then set it to false
    expect(shallowWrapper.state().displayDrawer).toBe(false);
  });

  // New test for markNotificationAsRead
  it("verifies that markNotificationAsRead works as intended", () => {
    const shallowWrapper = shallow(<App />);
    shallowWrapper.setState({ listNotifications });

    const instance = shallowWrapper.instance();
    instance.markNotificationAsRead(2);

    const updatedNotifications = shallowWrapper.state("listNotifications");
    expect(updatedNotifications).toHaveLength(listNotifications.length - 1);
    expect(updatedNotifications.find((n) => n.id === 2)).toBeUndefined();
  });
});
