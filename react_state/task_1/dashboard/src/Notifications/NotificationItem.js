import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  item: {
    width: "100%",
    fontSize: "20px",
    padding: "10px 8px",
    borderBottom: "1px solid black",
  },
});

const NotificationItem = React.memo(function NotificationItem({
  type,
  value,
  html,
  className,
}) {
  return html ? (
    <li
      data-notification-type={type}
      dangerouslySetInnerHTML={html}
      className={css(styles.item) + " " + className}
    />
  ) : (
    <li
      data-notification-type={type}
      className={css(styles.item) + " " + className}
    >
      {value}
    </li>
  );
});

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  className: PropTypes.string,
};

export default NotificationItem;
