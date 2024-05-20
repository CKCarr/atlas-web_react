import React, { Component } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

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
    padding: "8px 8px",
    width: "25%",
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
      width: "50%",
    },
  },
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      enableSubmit: false,
    };

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  }

  handleChangeEmail(event) {
    this.setState({ email: event.target.value }, this.toggleSubmitButton);
  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value }, this.toggleSubmitButton);
  }

  toggleSubmitButton() {
    const { email, password } = this.state;
    const enableSubmit = email !== "" && password !== "";
    this.setState({ enableSubmit });
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.logIn(email, password); // Call the logIn function from props
  }

  render() {
    const { email, password, enableSubmit } = this.state;

    return (
      <div className={css(styles.loginBody)}>
        <p>Login to access the full dashboard</p>
        <form
          onSubmit={this.handleLoginSubmit}
          className={css(styles.formGroup)}
        >
          <label htmlFor="email" className={css(styles.label)}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={this.handleChangeEmail}
            className={css(styles.input)}
          />

          <label htmlFor="password" className={css(styles.label)}>
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={this.handleChangePassword}
            className={css(styles.input)}
          />
          <input
            type="submit"
            value="OK"
            className={css(styles.button)}
            disabled={!enableSubmit}
          />
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  logIn: PropTypes.func.isRequired,
};

export default Login;
