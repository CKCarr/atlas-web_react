// config/setupTests.js
import { configure } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import util from "util";
import "@testing-library/jest-dom";

import { StyleSheetTestUtils } from "aphrodite";

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

// jest.mock("aphrodite", () => {
//   return {
//     StyleSheet: {
//       create: jest.fn((styles) => styles),
//     },
//     css: jest.fn().mockImplementation(() => "aphrodite-css"),
//     StyleSheetServer: {
//       renderStatic: jest.fn((renderFunc) => ({
//         html: renderFunc(),
//         css: {
//           content: "",
//           renderedClassNames: [],
//         },
//       })),
//     },
//   };
// });

Object.defineProperty(global, "TextEncoder", {
  value: util.TextEncoder,
});

configure({ adapter: new Adapter() });
