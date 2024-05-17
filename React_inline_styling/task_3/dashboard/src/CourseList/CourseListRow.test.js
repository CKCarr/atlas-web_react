import React from "react";
import { shallow } from "enzyme";
import CourseListRow from "./CourseListRow";

describe("CourseListRow", () => {
  it('renders one th with colspan="2" when isHeader is true and textSecondCell is null', () => {
    const wrapper = shallow(<CourseListRow isHeader textFirstCell="Test" />);
    expect(wrapper.find("th").prop("colSpan")).toBe("2");
  });

  it("renders two ths when isHeader is true and textSecondCell is not null", () => {
    const wrapper = shallow(
      <CourseListRow isHeader textFirstCell="Test1" textSecondCell="Test2" />
    );
    expect(wrapper.find("th").length).toBe(2);
  });

  it("renders two tds when isHeader is false", () => {
    const wrapper = shallow(
      <CourseListRow textFirstCell="Test1" textSecondCell="Test2" />
    );
    expect(wrapper.find("td").length).toBe(2);
  });
});

describe("CourseListRow inline-styles", () => {
  it("renders a header row with correct styling", () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell="Header" />
    );
    expect(wrapper.find("tr").prop("style")).toEqual({
      backgroundColor: "#deb5b545",
    });
  });

  it("renders a non-header row with correct styling", () => {
    const wrapper = shallow(
      <CourseListRow isHeader={false} textFirstCell="Row" />
    );
    expect(wrapper.find("tr").prop("style")).toEqual({
      backgroundColor: "#f5f5f5ab",
    });
  });
});
