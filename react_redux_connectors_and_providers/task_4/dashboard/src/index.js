// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { Provider } from "react-redux";
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import App from "./App/App";
import rootReducer from "./reducers/rootReducer";

const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
