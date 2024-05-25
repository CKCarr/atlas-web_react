import { fromJS } from "immutable";
import courseReducer from "./courseReducer";
import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from "../actions/courseActionTypes";

describe("courseReducer", () => {
  const initialState = fromJS({
    courses: {},
  });

  it("should return the initial state when no action is passed", () => {
    expect(courseReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle FETCH_COURSE_SUCCESS", () => {
    const data = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      { id: 3, name: "React", credit: 40 },
    ];
    const action = { type: FETCH_COURSE_SUCCESS, data };
    const expectedState = initialState.mergeIn(
      ["courses"],
      fromJS({
        1: { id: 1, name: "ES6", credit: 60, isSelected: false },
        2: { id: 2, name: "Webpack", credit: 20, isSelected: false },
        3: { id: 3, name: "React", credit: 40, isSelected: false },
      })
    );

    expect(courseReducer(undefined, action)).toEqual(expectedState);
  });

  it("should handle SELECT_COURSE", () => {
    const initialStateWithCourses = initialState.mergeIn(
      ["courses"],
      fromJS({
        1: { id: 1, name: "ES6", credit: 60, isSelected: false },
        2: { id: 2, name: "Webpack", credit: 20, isSelected: false },
        3: { id: 3, name: "React", credit: 40, isSelected: false },
      })
    );
    const action = { type: SELECT_COURSE, index: 2 };
    const expectedState = initialStateWithCourses.setIn(
      ["courses", "2", "isSelected"],
      true
    );

    expect(courseReducer(initialStateWithCourses, action)).toEqual(
      expectedState
    );
  });

  it("should handle UNSELECT_COURSE", () => {
    const initialStateWithCourses = initialState.mergeIn(
      ["courses"],
      fromJS({
        1: { id: 1, name: "ES6", credit: 60, isSelected: false },
        2: { id: 2, name: "Webpack", credit: 20, isSelected: true },
        3: { id: 3, name: "React", credit: 40, isSelected: false },
      })
    );
    const action = { type: UNSELECT_COURSE, index: 2 };
    const expectedState = initialStateWithCourses.setIn(
      ["courses", "2", "isSelected"],
      false
    );

    expect(courseReducer(initialStateWithCourses, action)).toEqual(
      expectedState
    );
  });
});
