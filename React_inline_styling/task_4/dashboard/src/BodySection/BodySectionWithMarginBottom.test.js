// src/BodySection/BodySectionWithMarginBottom.test.js
import React from "react";
import { shallow } from "enzyme";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";
import BodySection from "./BodySection";

describe("BodySectionWithMarginBottom", () => {
  it("renders BodySection correctly with passed props", () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="example title">
        <p>example content</p>
      </BodySectionWithMarginBottom>
    );
    const bodySection = wrapper.find(BodySection);
    expect(bodySection.exists()).toBeTruthy();
    expect(bodySection.prop("title")).toEqual("example title");
    // Check if BodySection contains the children
    expect(bodySection.contains(<p>example content</p>)).toBeTruthy();
  });
});
