import React from "react";

const WithLogging = (WrappedComponent) => {
  class WithLogging extends React.Component {
    componentDidMount() {
      // Get the component name or default to "Component"
      const componentName =
        WrappedComponent.displayName || WrappedComponent.name || "Component";
      console.log(`Component ${componentName} is mounted`);
    }

    componentWillUnmount() {
      const componentName =
        WrappedComponent.displayName || WrappedComponent.name || "Component";
      console.log(`Component ${componentName} is going to unmount`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  // Enhance display name for debugging and React Dev Tools
  const wrappedComponentName =
    WrappedComponent.displayName || WrappedComponent.name || "Component";
  WithLogging.displayName = `WithLogging(${wrappedComponentName})`;

  return WithLogging;
};

export default WithLogging;
