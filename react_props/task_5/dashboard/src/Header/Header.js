import React from "react";
import "./Header.css";
import logo from "../assets/holberton_logo.jpg";

function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="header">School Dashboard</h1>
    </header>
  );
}

export default Header;
