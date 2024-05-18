import React from "react";
import { shallow } from "enzyme";
import { StyleSheet, css } from "aphrodite";
import CourseListRow from "./CourseListRow";

const styles = StyleSheet.create({
  defaultRow: {
    backgroundColor: "#f5f5f5ab",
    textAlign: "left",
    borderCollapse: "collapse",
    borderColor: "#deb5b545",
  },
  headerRow: {
    backgroundColor: "#deb5b545",
    textAlign: "left",
    borderCollapse: "collapse",
    borderColor: "black",
  },
  th: {
    fontWeight: "bold",
    padding: "5px",
  },
  td: {
    padding: "10px",
  },
});

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

it("renders a header row with correct styling", () => {
  const wrapper = shallow(
    <CourseListRow isHeader={true} textFirstCell="Header" />
  );
  expect(wrapper.find("tr").prop("className")).toContain(css(styles.headerRow));
});

it("renders a non-header row with correct styling", () => {
  const wrapper = shallow(
    <CourseListRow isHeader={false} textFirstCell="Row" />
  );
  expect(wrapper.find("tr").prop("className")).toContain(
    css(styles.defaultRow)
  );
});
