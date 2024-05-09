# React component

## Table of Contents

1. [When to Use a Class or a Function to Create a Component](#when-to-use-a-class-or-a-function-to-create-a-component)
2. [The Lifecycle of a Class Component](#the-lifecycle-of-a-class-component)
3. [How to Test a Component](#how-to-test-a-component)
4. [How to Utilize a Jest Spy](#how-to-utilize-a-jest-spy)
5. [What is an HOC and How to Use It](#what-is-an-hoc-and-how-to-use-it)
6. [How to Optimize Performance and Control Which Components to Render](#how-to-optimize-performance-and-control-which-components-to-render)

## When to Use a Class or a Function to Create a Component

Class components are typically used when you need more control over the component lifecycle and when you have a more complex state logic that involves multiple sub-values or when the state is tightly coupled with lifecycle methods. Function components are generally simpler and suitable for components that do not require intricate lifecycle management or state logic.

### Class Components

- Use Case: Class components are useful when you need to manage state or lifecycle methods in more complex scenarios.
- Features:
Access to lifecycle methods (e.g., componentDidMount, componentDidUpdate, componentWillUnmount).
Can hold and manage local state.
- Example:

``` jsx

class ExampleClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    console.log('Component mounted.');
  }

  render() {
    return (
      <button onClick={() => this.setState({ count: this.state.count + 1 })}>
        Clicked {this.state.count} times
      </button>
    );
  }
}
```

### Functional Components

- Use Case: With the introduction of hooks, functional components are now widely used for all types of components, including those requiring state and lifecycle features.
- Features:
Simpler syntax and easier to read and write.
Use hooks for managing state (useState) and side effects (useEffect).
- Example:

```jsx

function ExampleFunctionalComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component mounted or updated.');
  });

  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}
```

## The Lifecycle of a Class Component

Understanding the lifecycle of a class component is crucial for correctly handling side effects and external interactions  (like API calls, timers, etc.) in a React application. Lifecycle methods include

- `constructor()`: Called before the component is mounted. Used for setting up initial state and other initializations.

- `componentDidMount()`: Called after the component has been mounted to the DOM. Ideal for network requests, subscriptions, etc.

- `componentDidUpdate(prevProps, prevState)`: Called after updates to the component (like state or props changes). Used for DOM updates and network requests based on prop or state changes.

- `componentWillUnmount()`: Called just before the component is unmounted and destroyed. Useful for cleanup (e.g., invalidating timers, cancelling network requests).

## How to Test a Component

Testing React components often involves checking whether they render correctly, handle user interactions as expected, and integrate well with other parts of your application. Tools like Jest and React Testing Library are commonly used.

- Jest is used for running tests and providing utilities to spy on functions, mock modules, and manipulate component state.

- React Testing Library offers utility functions to work with DOM elements as the user would, making it more suited for integration and user interaction tests.

## How to Utilize a Jest Spy

Using a Jest spy can help verify that functions are called correctly, especially in response to various user interactions or lifecycle events. This is critical for ensuring that components behave as expected under all conditions. A Jest spy lets you monitor the usage of a function that is called by the component you are testing. This is especially useful for testing if certain methods are called and how they are called.

- Example:

``` javascript

it('calls a function when button is clicked', () => {
  const onButtonClick = jest.fn();
  const { getByText } = render(<Button onClick={onButtonClick}>Click me</Button>);

  fireEvent.click(getByText('Click me'));
  expect(onButtonClick).toHaveBeenCalled();
});
```

## What is an HOC and How to Use It

A Higher-Order Component (HOC) is a function that takes a component and returns a new component with additional properties or behavior. It's a powerful pattern for reusing component logic in a React application.

- Example:

```jsx

function withLogging(WrappedComponent) {
  return class extends React.Component {
    componentDidMount() {
      console.log('Component did mount.');
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}
```

## How to Optimize Performance and Control Which Components to Render

Optimizing component rendering is key to enhancing the performance of React applications. Techniques like using `React.memo`, `shouldComponentUpdate`, and carefully managing state and props can significantly reduce unnecessary re-renders.
React re-renders can be controlled using React.memo for functional components, or shouldComponentUpdate in class components.

- React.memo Example:

```jsx

const MemoizedComponent = React.memo(function MyComponent(props) {
  /*render using props*/
});
```
