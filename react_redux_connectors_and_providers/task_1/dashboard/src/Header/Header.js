import React, { useContext } from "react";
import { StyleSheet, css } from "aphrodite";
import logo from "../assets/holberton_logo.jpg";
import AppContext from "../App/AppContext";

// Define your styles using Aphrodite
const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#fff",
    borderBottom: "2px solid #FF0000",
    padding: "2vh 2vw",
    display: "flex",
    alignItems: "flex-start",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "20px",
  },
  logo: {
    width: "150px",
    pointerEvents: "none",
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    color: "#FF0000",
    marginTop: "50px",
  },
  logoutSection: {
    display: "flex",
    cursor: "pointer",
  },
});

const Header = () => {
  const { user, logOut } = useContext(AppContext);

  return (
    <div className={css(styles.headerContainer)}>
      <img src={logo} className={css(styles.logo)} alt="logo" />
      <header className={css(styles.header)}>
        <h1 className={css(styles.title)}>School Dashboard</h1>
        {user.isLoggedIn && (
          <div id="logoutSection" className={css(styles.logoutSection)}>
            <p>
              Welcome <strong>{user.email}</strong> (
              <a onClick={logOut}>logout</a>)
            </p>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
