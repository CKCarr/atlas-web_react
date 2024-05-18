import React from "react";
import { shallow } from "enzyme";
import Login from "./Login";

describe("Login", () => {
  it("renders without crashing", () => {
    shallow(<Login />);
  });

  it("renders 3 input tags(email, password, button) and 2 label tags", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("input").length).toBe(3);
    expect(wrapper.find("label").length).toBe(2);
  });
  it("should have default state for enableSubmit as false", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.state("enableSubmit")).toBe(false);
  });

  it("should enable submit button when both inputs are not empty", () => {
    const wrapper = shallow(<Login />);
    wrapper
      .find("#email")
      .simulate("change", { target: { value: "test@test.com" } });
    wrapper
      .find("#password")
      .simulate("change", { target: { value: "password" } });
    expect(wrapper.state("enableSubmit")).toBe(true);
  });

  it("should disable submit button when one of the inputs is empty", () => {
    const wrapper = shallow(<Login />);
    wrapper.find("#email").simulate("change", { target: { value: "" } });
    wrapper
      .find("#password")
      .simulate("change", { target: { value: "password" } });
    expect(wrapper.state("enableSubmit")).toBe(false);

    wrapper
      .find("#email")
      .simulate("change", { target: { value: "test@test.com" } });
    wrapper.find("#password").simulate("change", { target: { value: "" } });
    expect(wrapper.state("enableSubmit")).toBe(false);
  });

  it("should update state to true when handleLoginSubmit is called", () => {
    const wrapper = shallow(<Login />);
    wrapper.instance().handleLoginSubmit({ preventDefault: () => {} });
    expect(wrapper.state("isLoggedIn")).toBe(true);
  });
});
