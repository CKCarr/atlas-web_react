// config/setupTests.js
import { configure } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import util from "util";
import "@testing-library/jest-dom";
import fetchMock from "jest-fetch-mock";

import { StyleSheetTestUtils } from "aphrodite";

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

Object.defineProperty(global, "TextEncoder", {
  value: util.TextEncoder,
});

configure({ adapter: new Adapter() });

fetchMock.enableMocks();
