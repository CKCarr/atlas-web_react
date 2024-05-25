# react_redux_reducer_selector

Learning Objectives:

1. Reducers

- Purpose and Role:

  - A reducer is a pure function that takes the previous state and an action, and returns the next state. It plays a crucial role in state management within Redux by specifying how the application's state changes in response to actions.
  - Resource: Redux Reducers Documentation

- Keeping Reducers Pure:

  - A pure function means it does not modify its inputs and returns the same output given the same inputs. This predictability is crucial for reliable state management.
  - Resource: Redux: Writing Reducers

- Avoiding Mutations:

  - Mutations in reducers can lead to unpredictable state changes and bugs. Always return new state objects instead of modifying existing ones.
  - Resource: Immutable Update Patterns

2. Immutable Map

- Use in Reducers:
  - Using libraries like Immutable.js helps manage state immutability in reducers, ensuring state updates without direct mutations.
  - Documentation: Immutable.js Documentation

3. Normalizr

- Purpose and Use:

  - Normalizr is used to normalize nested JSON data to a flat structure, making it easier to manage within the Redux store.
  - Documentation: Normalizr Documentation
- State Shape Normalization:

  - Normalizing state shape helps keep the Redux store structure predictable and manageable, particularly for complex or nested data.
  - Resource: Redux: Normalizing State Shape

4. Selectors

- What and When to Use:
  - Selectors are functions that extract specific pieces of state from the Redux store, often used for reusability and to encapsulate complex logic.
  - Resource: Reselect Documentation
  - Guide: Redux Selectors

5. Writing Tests

- Testing Reducers and Selectors:
  - Writing tests for reducers and selectors ensures that your state management logic works as expected and helps prevent regressions.
  - Guide: Testing Redux Reducers and Selectors
