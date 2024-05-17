import React from "react";
import PropTypes from "prop-types";

const NotificationItem = React.memo(function NotificationItem({
  type,
  value,
  html,
}) {
  return html ? (
    <li data-notification-type={type} dangerouslySetInnerHTML={html} />
  ) : (
    <li data-notification-type={type}>{value}</li>
  );
});

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
};

export default NotificationItem;
