import React from "react";
import "./Notifications.css";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import { NotificationItemShape } from "./NotificationItemShape";

function Notifications({ listNotifications, displayDrawer = false }) {
  // function to handle button click
  function handleClick() {
    console.log("Close button has been clicked");
  }

  return (
    <>
      <div>
        <div className="menuItem">Your notifications</div>
      </div>
      {displayDrawer && (
        <div className="Notifications">
          <button
            style={{
              float: "right",
              border: "none",
              backgroundColor: "white",
            }}
            aria-label="Close"
            onClick={handleClick}
          >
            X
          </button>
          <p>Here is the list of notifications</p>
          <ul>
            {listNotifications.map((notification) => (
              <NotificationItem
                key={notification.id}
                type={notification.type}
                value={notification.value}
                html={notification.html}
              />
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(PropTypes.shape(NotificationItemShape)),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;
