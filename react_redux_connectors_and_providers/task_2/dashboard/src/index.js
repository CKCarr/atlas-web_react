// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import { Provider } from "react-redux";
import { thunk } from 'redux-thunk';
import App from "./App/App";
import uiReducer from "./reducers/uiReducer";
import AppContext from './App/AppContext';

// Create a store using createStore
const store = createStore(uiReducer, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Implement a provider passing the store that you created to the main App */}
    <Provider store={store}>
      <App isLoggedIn={false} />
    </Provider>
  </React.StrictMode>
);
