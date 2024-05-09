import React from "react";
import { shallow } from "enzyme";
import CourseList from "./CourseList";
import CourseListRow from "./CourseListRow";

describe("CourseList Component Tests", () => {
  describe("Rendering with empty or no listCourses", () => {
    it("renders correctly with an empty array", () => {
      const wrapper = shallow(<CourseList listCourses={[]} />);
      expect(wrapper.find(CourseListRow).length).toBe(3);
      expect(wrapper.text()).toContain("No course available yet");
    });

    it("renders correctly if listCourses is not provided", () => {
      const wrapper = shallow(<CourseList />);
      expect(wrapper.find(CourseListRow).length).toBe(3);
      expect(wrapper.text()).toContain("No course available yet");
    });
  });

  describe("Rendering with listCourses", () => {
    const listCourses = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      { id: 3, name: "React", credit: 40 },
    ];

    it("renders the correct number of courses", () => {
      const wrapper = shallow(<CourseList listCourses={listCourses} />);
      expect(wrapper.find(CourseListRow).length).toBe(5); // 3 courses + 2 headers
    });
  });
});
