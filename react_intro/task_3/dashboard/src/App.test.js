import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App Component", () => {
  // test that App renders without crashing
  test("renders without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  // verify that App renders a div with the class App-header
  test("renders a div with class App-header", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(".App-header")).toHaveLength(1);
  });

  // verify that App renders a div with the class App-body
  test("renders a div with class App-body", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(".App-body")).toHaveLength(1);
  });

  // verify that App renders a div with the class App-footer
  test("renders a div with class App-footer", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(".App-footer")).toHaveLength(1);
  });
});
