import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

import { StyleSheetTestUtils } from "aphrodite";
import { StyleSheet, css } from "aphrodite";

describe("getFullYear function", () => {
  test("returns the correct year", () => {
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toBe(currentYear);
  });
});

describe("getFooterCopy function", () => {
  test("returns the correct string when isIndex is true", () => {
    const result = getFooterCopy(true);
    expect(result).toBe("Holberton School");
  });

  test("returns the correct string when isIndex is false", () => {
    const result = getFooterCopy(false);
    expect(result).toBe("Holberton School main dashboard");
  });
});

describe("getLatestNotification function", () => {
  test("returns the correct string", () => {
    const notificationString =
      "<strong>Urgent requirement</strong> - complete by EOD";
    expect(getLatestNotification()).toBe(notificationString);
  });
});

// Additional diagnostics to check the Aphrodite setup
describe("Aphrodite Style Injection", () => {
  const styles = StyleSheet.create({
    testStyle: {
      color: "red",
    },
  });

  it("should suppress styles", () => {
    StyleSheetTestUtils.suppressStyleInjection();
    const className = css(styles.testStyle);
    expect(className).toBeDefined();
    const styleTags = document.getElementsByTagName("style");
    const lastStyleTag = styleTags[styleTags.length - 1];
    if (lastStyleTag) {
      expect(lastStyleTag.innerHTML).not.toContain("red");
    } else {
      // No style tags found, which is expected when styles are suppressed
      expect(styleTags.length).toBe(0);
    }
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it("should resume styles", () => {
    const className = css(styles.testStyle);
    expect(className).toBeDefined();
    const styleTags = document.getElementsByTagName("style");
    const lastStyleTag = styleTags[styleTags.length - 1];
    if (lastStyleTag) {
      expect(lastStyleTag.innerHTML).toContain("red");
    }
  });
});
