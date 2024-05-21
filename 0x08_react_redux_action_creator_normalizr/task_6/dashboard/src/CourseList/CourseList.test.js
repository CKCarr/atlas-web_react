import React from "react";
import { shallow } from "enzyme";
import CourseList from "./CourseList";
import CourseListRow from "./CourseListRow";

describe("CourseList Component Tests", () => {
  it("renders correctly with an empty array", () => {
    const wrapper = shallow(<CourseList listCourses={[]} />);
    // Check the rendered text for the message
    expect(wrapper.find(CourseListRow).at(2).dive().text()).toContain(
      "No course available yet"
    );
    expect(wrapper.find(CourseListRow).length).toBe(3);
  });

  it("renders correctly if listCourses is not provided", () => {
    const wrapper = shallow(<CourseList />);
    // Check the specific text at the expected position
    console.log(wrapper.debug()); // Outputs the structure of the rendered component
    console.log(wrapper.text()); // Outputs the text content of the rendered component
    expect(wrapper.find(CourseListRow).at(2).dive().text()).toContain(
      "No course available yet"
    );
    expect(wrapper.find(CourseListRow).length).toBe(3);
  });

  it("renders the correct number of courses when listCourses is provided", () => {
    const listCourses = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      { id: 3, name: "React", credit: 40 },
    ];
    const wrapper = shallow(<CourseList listCourses={listCourses} />);
    expect(wrapper.find(CourseListRow).length).toBe(listCourses.length + 2);
  });
});
