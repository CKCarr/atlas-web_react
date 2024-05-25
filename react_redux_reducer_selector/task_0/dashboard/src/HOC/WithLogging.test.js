import React from "react";
import { mount } from "enzyme";
import WithLogging from "./WithLogging";

describe("WithLogging HOC", () => {
  // Mocking console.log
  const consoleSpy = jest.spyOn(console, "log");

  afterEach(() => {
    // Clear mock after each test
    consoleSpy.mockClear();
  });

  afterAll(() => {
    // Restore console.log after all tests
    consoleSpy.mockRestore();
  });

  it('should log on mount and unmount with "Component" when the wrapped element is pure HTML', () => {
    const WrappedComponent = WithLogging(() => <p>Test</p>);

    const wrapper = mount(<WrappedComponent />);
    expect(consoleSpy).toHaveBeenCalledWith("Component Component is mounted");

    wrapper.unmount();
    expect(consoleSpy).toHaveBeenCalledWith(
      "Component Component is going to unmount"
    );
  });

  it("should log on mount and unmount with the component name when the wrapped element is the Login component", () => {
    // Mock Login component for better demonstration
    const Login = () => <div>Login Component</div>;
    const WrappedLogin = WithLogging(Login);

    const wrapper = mount(<WrappedLogin />);
    expect(consoleSpy).toHaveBeenCalledWith("Component Login is mounted");

    wrapper.unmount();
    expect(consoleSpy).toHaveBeenCalledWith(
      "Component Login is going to unmount"
    );
  });
});
