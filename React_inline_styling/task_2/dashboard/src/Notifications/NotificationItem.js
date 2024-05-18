import React from "react";
import PropTypes from "prop-types";

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
      className={className}
    />
  ) : (
    <li data-notification-type={type} className={className}>
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
