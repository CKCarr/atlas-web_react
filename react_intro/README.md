# react_intro

## React Application Development Guide

This guide provides an overview of creating, developing, and testing a React application. It covers the initial setup with `create-react-app`, working with JSX, debugging, and testing, as well as configuring Webpack and Babel.

## Table of Contents

1. [Creating a Basic JavaScript Application Using React](#creating-a-basic-javascript-application-using-react)

2. [Using create-react-app for Quick Setup](#using-create-react-app-for-quick-setup)

3. [Understanding and Using JSX](#understanding-and-using-jsx)

4. [Debugging with React Developer Tools](#debugging-with-react-developer-tools)

5. [Testing with Enzyme's Shallow Rendering](#testing-with-enzymes-shallow-rendering)

6. [Using React with Webpack & Babel](#using-react-with-webpack--babel)

## 1. Creating a Basic JavaScript Application Using React

React is a popular JavaScript library for building user interfaces, primarily for single-page applications where you need fast interaction with the user. React uses a component-based architecture, where each component represents a part of the user interface.

### Basic Components of a React Application

- **Components**: Reusable pieces of the UI.
- **Props**: Short for properties, these are a way of passing data from parent to child components.
- **State**: Internal data management within the component.

## 2. Using create-react-app for Quick Setup

To start a new React project, the simplest and most common approach is using `create-react-app`. It sets up your environment and lets you start developing right away without worrying about configuration.

### Steps to Use create-react-app

1. **Install Node.js**: Ensure you have Node.js installed as it includes npm, which is necessary to manage packages.

2. **Install create-react-app**:

```bash
   npm install -g create-react-app
```

3. **Create a new project**

``` bash
create-react-app my-app
```

This command sets up the project structure, which includes your project folder, initial project files, and all the necessary dependencies.

### 3. Understanding and Using JSX

JSX is a syntax extension for JavaScript, recommended by React to write HTML structures in JavaScript files.

Example:

```jsx

const element = <h1>Welcome to React!</h1>;
```

### 4. Debugging with React Developer Tools

React Developer Tools is a browser extension for Chrome and Firefox that helps you be able to inspect the React component hierarchies.

#### Installation and Use

1. Install the extension from your browser's extension store.
2. Open your React application in the browser.
3. Open the Developer Tools (usually F12), and select the React tab.

### 5. Testing with Enzyme's Shallow Rendering

Enzyme is a testing utility that makes it easier to test React components' output.

Setup

~~~ bash

npm install --save-dev enzyme enzyme-adapter-react-16
~~~

Create a setup file to configure Enzyme with your React version.

### 6. Using React with Webpack & Babel

Webpack bundles JavaScript files for usage in a browser, while Babel compiles JavaScript.

#### Configuration

Webpack and Babel configurations are typically set up by create-react-app. For custom setups, configurations need to be modified in webpack.config.js and .babelrc files.

Webpack bundles modules and assets, including JavaScript, images, and CSS. Babel compiles modern JavaScript down to ES5 for compatibility.

#### Basic Workflow

- Babel: Set up in your project to transpile JSX and ES6 to a format that browsers can understand.
- Webpack: Configured to bundle your scripts, styles, and assets into static files for production.
