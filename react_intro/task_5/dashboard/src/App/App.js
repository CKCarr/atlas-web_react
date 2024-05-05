import React from "react";
import "./App.css";
import { getFullYear, getFooterCopy } from "../utils/utils";
import HolbertonLogo from "../assets/holberton_logo.jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={HolbertonLogo} className="App-logo" alt="logo" />
        <h1 className="header">School Dashboard</h1>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
        <div>
          <label
            htmlFor="email"
            onClick={() => document.getElementById("email").focus()}
          >
            Email:
          </label>
          <input type="email" id="email" name="email" />

          <label
            htmlFor="password"
            onClick={() => document.getElementById("password").focus()}
          >
            Password:
          </label>
          <input type="password" id="password" name="password" />
          <button>OK</button>
        </div>
      </body>
      <footer className="App-footer">
        <p>{getFooterCopy(false)}</p>
        <p>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
      </footer>
    </div>
  );
}

export default App;
