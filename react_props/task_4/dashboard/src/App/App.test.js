import React, { useState } from "react";
import { shallow } from "enzyme";
import App from "./App";

import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";

describe("App", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
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
    // Simulate isLoggedIn being true by passing isLoggedIn prop
    wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find(Login).exists()).toBe(false);
  });

  it("contains CourseList component when isLoggedIn is true", () => {
    // Simulate isLoggedIn being true by passing isLoggedIn prop
    wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find(CourseList).exists()).toBe(true);
  });
});
