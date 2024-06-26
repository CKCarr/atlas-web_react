import React from "react";
import "./Login.css";
import WithLogging from "../HOC/WithLogging";

function Login() {
  return (
    <>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
        <div>
          <label
            htmlFor="email"
            onClick={() => document.getElementById("email").focus()}
          >
            Email:
          </label>
          <input type="email" id="email" name="email" autoComplete="on" />

          <label
            htmlFor="password"
            onClick={() => document.getElementById("password").focus()}
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="off"
          />
          <button>OK</button>
        </div>
      </body>
    </>
  );
}

export default WithLogging(Login);
