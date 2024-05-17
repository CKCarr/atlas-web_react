// config/setupTests.js
import { configure } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import util from "util";
import "@testing-library/jest-dom";

Object.defineProperty(global, "TextEncoder", {
  value: util.TextEncoder,
});

configure({ adapter: new Adapter() });
