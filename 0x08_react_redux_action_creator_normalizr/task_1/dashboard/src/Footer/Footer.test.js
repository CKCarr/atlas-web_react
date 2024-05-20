import React from "react";
import { shallow, mount } from "enzyme";
import Footer from "./Footer";
import AppContext from "../App/AppContext";

describe("Footer", () => {
  it("renders without crashing", () => {
    shallow(<Footer />);
  });

  it("does not display the contact link when user is logged out", () => {
    const contextValue = {
      user: { isLoggedIn: false, email: "" },
    };
    const wrapper = mount(
      <AppContext.Provider value={contextValue}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find("a").exists()).toBe(false);
  });

  it("displays the contact link when user is logged in", () => {
    const contextValue = {
      user: { isLoggedIn: true, email: "test@test.com" },
    };
    const wrapper = mount(
      <AppContext.Provider value={contextValue}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find("a").exists()).toBe(true);
    expect(wrapper.find("a").text()).toBe("Contact us");
  });

  it("the contact link has correct href", () => {
    const contextValue = {
      user: { isLoggedIn: true, email: "test@test.com" },
    };
    const wrapper = mount(
      <AppContext.Provider value={contextValue}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find("a").prop("href")).toBe("/contact");
  });
});
