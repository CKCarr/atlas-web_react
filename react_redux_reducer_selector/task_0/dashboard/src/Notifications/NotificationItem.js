import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  item: {
    width: "100%",
    fontSize: "20px",
    padding: "10px 8px",
    borderBottom: "1px solid black",
    cursor: "pointer",
  },
});

const NotificationItem = React.memo(function NotificationItem({
  type = "default",
  value,
  html,
  className,
  markAsRead,
}) {
  return html ? (
    <li
      data-notification-type={type}
      dangerouslySetInnerHTML={html}
      className={css(styles.item) + " " + className}
      onClick={markAsRead}
    />
  ) : (
    <li
      data-notification-type={type}
      className={css(styles.item) + " " + className}
      onClick={markAsRead}
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
  markAsRead: PropTypes.func.isRequired,
};

NotificationItem.defaultProps = {
  type: "default",
  value: "",
  className: "",
};

export default NotificationItem;
