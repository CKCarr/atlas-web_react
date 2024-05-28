import React from "react";
import ReactDOM from "react-dom/client";
import { legacy_createStore as createStore } from 'redux'
import { Provider } from "react-redux";
import App from "./App/App";
import uiReducer from "./reducers/uiReducer";

// Create a store using createStore
const store = createStore(uiReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Implement a provider passing the store that you created to the main App */}
    <Provider store={store}>
      <AppContext.Provider value={{ user: { isLoggedIn: false }, logOut: () => { } }}>
        <App isLoggedIn={false} />
      </AppContext.Provider>
    </Provider>
  </React.StrictMode>
);
