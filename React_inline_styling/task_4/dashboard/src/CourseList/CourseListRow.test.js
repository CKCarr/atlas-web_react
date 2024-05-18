import React from "react";
import { shallow } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";
import CourseListRow from "./CourseListRow";
import { StyleSheet, css } from "aphrodite";

// Mocking Aphrodite styles
const styles = StyleSheet.create({
  headerRow: {
    backgroundColor: "#deb5b545",
  },
  defaultRow: {
    backgroundColor: "#f5f5f5ab",
  },
});

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("CourseListRow inline-styles", () => {
  it("renders a header row with correct styling", () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell="Header" />
    );
    expect(wrapper.find("tr").hasClass(css(styles.headerRow))).toBe(true);
  });

  it("renders a non-header row with correct styling", () => {
    const wrapper = shallow(
      <CourseListRow isHeader={false} textFirstCell="Row" />
    );
    expect(wrapper.find("tr").hasClass(css(styles.defaultRow))).toBe(true);
  });
});
