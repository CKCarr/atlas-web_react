// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from "react-redux";
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import App from "./App/App";
import rootReducer from "./reducers/rootReducer";

// compose with dev tools
const composeEnhancers = composeWithDevTools({ trace: true });

// Create a store using createStore
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Implement a provider passing the store that you created to the main App */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
