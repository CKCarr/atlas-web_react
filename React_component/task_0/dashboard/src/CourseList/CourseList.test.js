import React from "react";
import { shallow } from "enzyme";
import CourseList from "./CourseList";
import CourseListRow from "./CourseListRow";

describe("CourseList Component Tests", () => {
  it("renders correctly with an empty array", () => {
    const wrapper = shallow(<CourseList listCourses={[]} />);
    // Expecting at least one header row and one "No course available yet" row
    expect(wrapper.find(CourseListRow).length).toBe(3);
    expect(wrapper.text()).toContain("No course available yet");
  });

  it("renders correctly if listCourses is not provided", () => {
    const wrapper = shallow(<CourseList />);
    // Similarly, expecting at least one header row and one "No course available yet" row
    expect(wrapper.find(CourseListRow).length).toBe(3);
    expect(wrapper.text()).toContain("No course available yet");
  });

  it("renders the correct number of courses when listCourses is provided", () => {
    const listCourses = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      { id: 3, name: "React", credit: 40 },
    ];
    const wrapper = shallow(<CourseList listCourses={listCourses} />);
    // Plus two header rows, if that's always rendered
    expect(wrapper.find(CourseListRow).length).toBe(listCourses.length + 2);
  });
});
