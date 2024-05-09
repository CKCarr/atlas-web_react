import { configure } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import util from "util";

global.TextEncoder = util.TextEncoder;

configure({ adapter: new Adapter() });
