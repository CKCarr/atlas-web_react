// src/Notifications/NotificationItem.js
import React from "react";
import PropTypes from "prop-types";

class NotificationItem extends React.Component {
  render() {
    const { type, value, html, markAsRead } = this.props;
    return (
      <li data-notification-type={type} onClick={markAsRead}>
        {value}
        {html && <span dangerouslySetInnerHTML={html} />}
      </li>
    );
  }
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({ __html: PropTypes.string }),
  markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
  markAsRead: () => {},
};

export default NotificationItem;
