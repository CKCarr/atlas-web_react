import React, { useContext } from "react";
import PropTypes from 'prop-types';
import { StyleSheet, css } from "aphrodite";
import logo from "../assets/holberton_logo.jpg";
import { connect } from 'react-redux';
import { logout } from '../actions/uiActionCreators';

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

const Header = ({ user, logout }) => {
  const handleLogout = (e) => {
    e.preventDefault();
    logout();
  };

  return (
    <div className={css(styles.headerContainer)}>
      <img src={logo} className={css(styles.logo)} alt="logo" />
      <header className={css(styles.header)}>
        <h1 className={css(styles.title)}>School Dashboard</h1>
        {user.isLoggedIn && (
          <div id="logoutSection" className={css(styles.logoutSection)}>
            <p>
              Welcome <strong>{user.email}</strong> (
              <a onClick={handleLogout}>
                (logout)
              </a>)
            </p>
          </div>
        )}
      </header>
    </div>
  );
};

Header.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
    isLoggedIn: PropTypes.bool,
  }).isRequired,
  logout: PropTypes.func.isRequired,
};

export const mapStateToProps = (state) => {
  const userState = state.get('user');
  return {
    user: userState && userState.toJS ? userState.toJS() : userState
  };
};

export const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
