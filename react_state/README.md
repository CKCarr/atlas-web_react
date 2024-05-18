# React state

## Learning Objectives

What the state of a component or a container is
The lifecycle of a component
How to modify a state and execute code in the right order
What a controlled component is
How to use Forms in React
How to reuse smaller components, keep them pure, and lift its state to principal containers
The use of a React Hook and how to create one
How to test State changes with Enzyme

### State and Lifecycle

What the state of a component or a container is:

- The state is a built-in object that stores property values that belong to the component. When the state object changes, the component re-renders.

### The lifecycle of a component

- Every React component has a lifecycle that you can monitor and manipulate during its three main phases:

  - Mounting: When the component is being created and inserted into the DOM.
  - Updating: When the component is being re-rendered as a result of changes to its props or state.
  - Unmounting: When the component is being removed from the DOM.

### State Management

- How to modify a state and execute code in the right order:

  - State can be modified using the setState method. React schedules updates to the component state and then re-renders the component. setState can also accept a callback function which is executed once the state has been updated.

### Controlled Components

- What a controlled component is:

  - Controlled components are those where the form data is handled by the React component. It means the state of the form elements is controlled by the React component.

### Forms in React

- How to use Forms in React:

  - Forms in React can be handled using controlled components. Each form element, such as `<input>`, `<textarea>`, and `<select>`, maintains its own state and updates based on the component's state.

### Component Reusability

- How to reuse smaller components, keep them pure, and lift it's state to principal containers:

  - Smaller components can be reused by ensuring they are stateless and rely on props for their data. Lifting state involves moving the state to the parent component so that the state can be shared among child components.

### React Hooks

- The use of a React Hook and how to create one:
  - React Hooks will allow you to use state and other React features without writing a class. Common hooks include `useState` for state management and `useEffect` for side effects. Custom hooks can be created to reuse stateful logic.

### Testing State Changes with Enzyme

- How to test State changes with Enzyme:
  - Enzyme is a testing utility for React that makes it easier to test the component's output. It provides methods to simulate user interaction and test state changes. Enzyme methods like `setState`, `simulate`, and `instance` can be used to test state changes and ensure components behave as expected.
