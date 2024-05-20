# React Redux action creator+normalizr

## Learning Objectives

1. Normalizr’s purpose and how to use it
2. schemas and normalization of nested JSON
3. core concepts of Redux
4. Redux actions
5. Redux action creators
5. async actions in Redux
7. how to write tests for Redux

## 1. Normalizr’s Purpose and How to Use It

**Purpose of Normalizr:**

- Normalization: Normalizr is a library used to transform nested JSON into a flat structure, making it easier to manage and access.

- Consistency: Ensures that each entity is stored only once in your state, avoiding redundancy and inconsistency.

**How to Use Normalizr:**

- Define Schemas: Create schemas to describe the structure of your data.

- Normalize Data: Use the normalize function with your schema to transform your nested data.

Example:

```javascript

import { normalize, schema } from 'normalizr';

// Define a users schema
const user = new schema.Entity('users');

// Define your articles schema
const article = new schema.Entity('articles', {
  author: user,
  contributors: [user]
});

const originalData = {
  id: '123',
  title: 'My Article',
  author: {
    id: '1',
    name: 'Paul'
  },
  contributors: [
    {
      id: '2',
      name: 'Nicole'
    },
    {
      id: '3',
      name: 'Sam'
    }
  ]
};

const normalizedData = normalize(originalData, article);
console.log(normalizedData);
```

## 2. Schemas and Normalization of Nested JSON

**Schemas:**

- Schemas are definitions of how your data structure looks.

- They help in transforming nested JSON into flat structures.

**Normalization:**

- Process of converting nested JSON into a flat structure with entities.
- Each entity is stored by its ID, ensuring that each entity appears only once.

Example:

Using the same example as above, the normalized data would look like:

```javascript

{
  result: '123',
  entities: {
    articles: {
      '123': { id: '123', title: 'My Article', author: '1', contributors: ['2', '3'] }
    },
    users: {
      '1': { id: '1', name: 'Paul' },
      '2': { id: '2', name: 'Nicole' },
      '3': { id: '3', name: 'Sam' }
    }
  }
}
```

## 3. Core Concepts of Redux

**Core Concepts:**

- Store: Holds the state of your application.
- Actions: Plain objects describing an intention to change the state.
- Reducers: Functions that handle actions and update the state accordingly.
- Dispatch: Method to send actions to the reducer.
- Selectors: Functions to select data from the state.

Example:

```javascript

// Action
const increment = () => ({
  type: 'INCREMENT'
});

// Reducer
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    default:
      return state;
  }
};

// Store
import { createStore } from 'redux';
const store = createStore(counter);

// Dispatching an action
store.dispatch(increment());
console.log(store.getState()); // 1
```

## 4. Redux Actions

**Actions:**

- Actions are plain JavaScript objects.
- They must have a type: property, which describes the action.

Example:

```javascript

const addTodo = (text) => ({
  type: 'ADD_TODO',
  payload: text
});
```

## 5. Redux Action Creators

**Action Creators:**

- Functions that create actions.
- They help in organizing and managing actions.

Example:

```javascript

const addTodo = (text) => ({
  type: 'ADD_TODO',
  payload: text
});

// Usage
store.dispatch(addTodo('Learn Redux'));
```

## 6. Async Actions in Redux

**Async Actions:**

- Redux Thunk or other middleware can be used to handle asynchronous actions.
- Thunks, are functions that return a function, allowing you to dispatch multiple actions.

Example with Redux Thunk:

``` javascript

// Async Action Creator
const fetchPosts = () => {
  return (dispatch) => {
    dispatch({ type: 'FETCH_POSTS_REQUEST' });
    fetch('/posts')
      .then(response => response.json())
      .then(posts => {
        dispatch({ type: 'FETCH_POSTS_SUCCESS', payload: posts });
      })
      .catch(error => {
        dispatch({ type: 'FETCH_POSTS_FAILURE', error });
      });
  };
};
```

## 7. How to Write Tests for Redux

**Writing Tests:**

- Test actions, reducers, and async action creators.
- Use libraries like Jest for testing.

Example Test for Action:

``` javascript

import { addTodo } from './actions';

describe('addTodo action', () => {
  it('should create an action to add a todo', () => {
    const text = 'Finish docs';
    const expectedAction = {
      type: 'ADD_TODO',
      payload: text
    };
    expect(addTodo(text)).toEqual(expectedAction);
  });
});
```

Example Test for Reducer:

```javascript

import { counter } from './reducers';

describe('counter reducer', () => {
  it('should return the initial state', () => {
    expect(counter(undefined, {})).toEqual(0);
  });

  it('should handle INCREMENT', () => {
    expect(counter(0, { type: 'INCREMENT' })).toEqual(1);
  });
});
```

Example Test for Async Action:

```javascript

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './actions';
import fetchMock from 'fetch-mock';
import expect from 'expect';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('creates FETCH_POSTS_SUCCESS when fetching posts has been done', () => {
    fetchMock.getOnce('/posts', {
      body: { posts: ['do something'] },
      headers: { 'content-type': 'application/json' }
    });

    const expectedActions = [
      { type: 'FETCH_POSTS_REQUEST' },
      { type: 'FETCH_POSTS_SUCCESS', payload: { posts: ['do something'] } }
    ];
    const store = mockStore({ posts: [] });

    return store.dispatch(actions.fetchPosts()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
```
