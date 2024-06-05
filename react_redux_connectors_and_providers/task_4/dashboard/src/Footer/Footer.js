import React, { useContext } from "react";
import PropTypes from 'prop-types';
import { getFullYear, getFooterCopy } from "../utils/utils";
import { connect } from 'react-redux';
import { StyleSheet, css } from "aphrodite";

// Define your styles using Aphrodite
const styles = StyleSheet.create({
  footer: {
    borderTop: "2px solid #FF0000",
    textAlign: "center",
    fontStyle: "italic",
    padding: "10px",
    bottom: 0,
  },
  contactLink: {
    display: "block",
    marginTop: "10px",
  },
});

const Footer = ({ user }) => {

  return (
    <footer className={css(styles.footer)}>
      <p>{getFooterCopy(false)}</p>
      <p>
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </p>
      {user.isLoggedIn && (
        <p className={css(styles.contactLink)}>
          <a href="/contact">Contact us</a>
        </p>
      )}
    </footer>
  );
};

export const mapStateToProps = (state) => ({
  user: state.ui.get('user').toJS(), // Ensure the `user` is converted to a plain JS object
});

Footer.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
    isLoggedIn: PropTypes.bool,
  }),
};

export default connect(mapStateToProps)(Footer);
