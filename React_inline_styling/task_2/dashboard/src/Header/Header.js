import React from "react";
import { StyleSheet, css } from "aphrodite";
import logo from "../assets/holberton_logo.jpg";

// Define your styles using Aphrodite
const styles = StyleSheet.create({
  header: {
    backgroundColor: "#fff",
    borderBottom: "2px solid red",
    paddingTop: "2vh",
    alignItems: "center",
    display: "flex",
  },
  logo: {
    width: "150px",
    marginRight: "20px",
    pointerEvents: "none",
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.5rem",
  },
});

function Header() {
  return (
    <header className={css(styles.header)}>
      <img src={logo} className={css(styles.logo)} alt="logo" />
      <h1 className={css(styles.title)}>School Dashboard</h1>
    </header>
  );
}

export default Header;
