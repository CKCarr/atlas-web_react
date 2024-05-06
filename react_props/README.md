# Learning Objectives

How to create basic React components using functions
How to reuse components
How to pass properties to components
How to define types for components
How to use Fragments
When to use a key to improve a loop’s performance

## 1. Creating Basic React Components using Functions

In React, you can create functional components using ES6 arrow functions or regular functions. For example:

```jsx

import React from 'react';

const MyComponent = () => {
  return <div>Hello, I am a basic React component!</div>;
};

export default MyComponent;
```

## 2 Reusing Components

To reuse components, you can import and use them in other components. For instance, if you have a component named MyComponent, you can reuse it in another component like this:

```jsx

import React from 'react';
import MyComponent from './MyComponent';

const App = () => {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <MyComponent />
    </div>
  );
};

export default App;
```

## 3. Passing Properties to Components

You can pass properties (props) to components to customize their behavior or content. For example:

```jsx

import React from 'react';

const Greeting = (props) => {
  return <div>Hello, {props.name}!</div>;
};

export default Greeting;
```

Then you can use <Greeting name="User" /> to pass the name prop to the Greeting component.

## 4. Defining Types for Components

You can define types for components using PropTypes or TypeScript. PropTypes are part of React and allow you to specify the types of props a component should receive. For example:

``` jsx


import React from 'react';
import PropTypes from 'prop-types';

const Greeting = (props) => {
  return <div>Hello, {props.name}!</div>;
};

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Greeting;
```

## 5.Using Fragments

Fragments allow you to group multiple elements without adding extra nodes to the DOM. You can use an empty tag (<>...</>) or <React.Fragment>...</React.Fragment> to wrap elements. For example:

```jsx

import React from 'react';

const MyComponent = () => {
  return (
    <>
      <h1>Title</h1>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
    </>
  );
};

export default MyComponent;
```

## 6. Using Keys to Improve Loop Performance

When rendering lists in React using map(), adding a unique key prop to each item improves performance by helping React identify which items have changed, been added, or been removed efficiently. For example:

``` jsx

import React from 'react';

const MyList = () => {
  const items = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default MyList;
```
