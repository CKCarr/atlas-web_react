import React, { useContext } from "react";
import { getFullYear, getFooterCopy } from "../utils/utils";
import { StyleSheet, css } from "aphrodite";
import AppContext from "../App/AppContext";

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

const Footer = () => {
  const { user } = useContext(AppContext);
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

export default Footer;
