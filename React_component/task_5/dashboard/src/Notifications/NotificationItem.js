// src/Notifications/NotificationItem.js
import React, { memo } from "react";
import PropTypes from "prop-types";

function NotificationItem({ type, value, html }) {
  if (html) {
    return <li data-notification-type={type} dangerouslySetInnerHTML={html} />;
  }
  return <li data-notification-type={type}>{value}</li>;
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
};

NotificationItem.defaultProps = {
  type: "default",
};

// Use memo to make the component pure
export default memo(NotificationItem);
