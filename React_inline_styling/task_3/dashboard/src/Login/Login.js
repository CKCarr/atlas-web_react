import React from "react";
import { StyleSheet, css } from "aphrodite/no-important";

// Define your styles using Aphrodite
const styles = StyleSheet.create({
  loginBody: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    padding: "20px",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
    width: "50%",
  },
  label: {
    marginRight: "10px",
    textAlign: "left",
  },
  input: {
    margin: "5px 0 15px",
    width: "100%",
  },
  button: {
    marginTop: "10px",
    padding: "10px 10px",
  },
  "@media (max-width: 900px)": {
    loginBody: {
      padding: "10px",
    },
    formGroup: {
      display: "flex",
      flexDirection: "column",
      width: "25%",
    },
    label: {
      width: "50%",
    },
    input: {
      width: "50%",
    },
    button: {
      width: "50",
    },
  },
});

function Login() {
  return (
    <>
      <div className={css(styles.loginBody)}>
        <p>Login to access the full dashboard</p>
        <div className={css(styles.formGroup)}>
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
    </>
  );
}

export default Login;
