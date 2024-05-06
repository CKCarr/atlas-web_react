import React from "react";
import HolbertonLogo from "../assets/holberton_logo.jpg";

import "./Header.css";

function Header() {
  return (
    <header className="App-header">
      <img src={HolbertonLogo} className="App-logo" alt="logo" />
      <h1 className="header">School Dashboard</h1>
    </header>
  );
}

export default Header;
