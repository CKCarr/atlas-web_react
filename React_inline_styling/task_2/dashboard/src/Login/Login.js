import React from "react";
import { StyleSheet, css } from "aphrodite/no-important";

// Define your styles using Aphrodite
const styles = StyleSheet.create({
  loginBody: {
    margin: "45px auto",
    maxWidth: "480px",
    padding: "25px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    backgroundColor: "#f4f4f4",
  },
  label: {
    display: "flex",
    marginRight: "20px",
  },
  input: {
    margin: "15px 0",
  },
  button: {
    marginTop: "10px",
  },
});

function Login() {
  return (
    <div className={css(styles.loginBody)}>
      <p>Login to access the full dashboard</p>
      <div>
        <label
          htmlFor="email"
          onClick={() => document.getElementById("email").focus()}
          className={css(styles.label)}
        >
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          autoComplete="on"
          className={css(styles.input)}
        />

        <label
          htmlFor="password"
          onClick={() => document.getElementById("password").focus()}
          className={css(styles.label)}
        >
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          autoComplete="off"
          className={css(styles.input)}
        />
        <button className={css(styles.button)}>OK</button>
      </div>
    </div>
  );
}

export default Login;
