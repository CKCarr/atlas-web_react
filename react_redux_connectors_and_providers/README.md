# React Redux Connectors and Providers

## Redux Connectors and How to Use Them

Redux connectors are used to connect React components to the Redux store. The connect function from react-redux is used to map the state and dispatch to the props of a component.

`connect` Function
The connect function takes up to four arguments, but the two most commonly used are mapStateToProps and mapDispatchToProps.

- mapStateToProps: Maps state from the Redux store to the component's props.
- mapDispatchToProps: Maps dispatch actions to the component's props.

Example of mapStateToProps and mapDispatchToProps

```javascript

import { connect } from 'react-redux';
import { someActionCreator } from './actions/someActions';
import MyComponent from './components/MyComponent';

const mapStateToProps = (state) => ({
  someState: state.someReducer.someState,
});

const mapDispatchToProps = (dispatch) => ({
  someAction: () => dispatch(someActionCreator()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyComponent);
```

## How to Map an Action Creator to a Component

To map an action creator to a component, you use the mapDispatchToProps function as shown above.

## How to Map an Async Action Creator with Redux Thunk

Redux Thunk allows you to write action creators that return a function instead of an action. This is useful for handling asynchronous operations.

```javascript

import { connect } from 'react-redux';
import { fetchData } from './actions/dataActions';
import MyComponent from './components/MyComponent';

const mapStateToProps = (state) => ({
  data: state.data,
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyComponent);
```

## Redux Providers

The Provider component from react-redux makes the Redux store available to any nested components that need to access the Redux store.

## Setting Up Your App's Store

First, create a Redux store using createStore and apply middleware if needed.

src/store.js

```javascript

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import someReducer from './reducers/someReducer';

const rootReducer = combineReducers({
  someReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
```

Next, use the Provider component to make the store available to your application.

src/index.js

```javascript

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

## Improving Connector Performance with Reselect

Reselect is a library for creating memoized selectors, which helps improve performance by avoiding unnecessary recalculations of derived data.

src/selectors/someSelectors.js

```javascript

import { createSelector } from 'reselect';

const selectSomeState = (state) => state.someReducer.someState;

export const getDerivedData = createSelector(
  [selectSomeState],
  (someState) => {
    // Compute derived data
    return someState.derivedData;
  }
);
```

## Using the Selector in a Component

```javascript

import { connect } from 'react-redux';
import { getDerivedData } from './selectors/someSelectors';
import MyComponent from './components/MyComponent';

const mapStateToProps = (state) => ({
  derivedData: getDerivedData(state),
});

export default connect(mapStateToProps)(MyComponent);
```

## Using Redux DevTools

Redux DevTools is a powerful tool for debugging your application's state changes.

1. Install the Redux DevTools extension in your browser.
2. Use `composeWithDevTools` when creating the store.

src/store.js (revisited)

```javascript

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import someReducer from './reducers/someReducer';

const rootReducer = combineReducers({
  someReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
```

## **Summary**

- **Redux Connectors:** Use connect to map state and dispatch to props.
- **Async Actions:** Use Redux Thunk to handle async operations.
- **Redux Providers:** Use Provider to make the store available to components.
- **Selectors:** Use Reselect for efficient state selection and memoization.
- **DevTools:** Use Redux DevTools for debugging state changes.
