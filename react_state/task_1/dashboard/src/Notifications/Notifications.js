// src/Notifications/Notifications.js
import React, { Component } from "react";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import { NotificationItemShape } from "./NotificationItemShape";
import { StyleSheet, css } from "aphrodite";

const NOTIFICATION_SHAPE = NotificationItemShape;

// Define keyframes for animations
const fadeIn = {
  "0%": { opacity: 0.5 },
  "100%": { opacity: 1 },
};

const bounce = {
  "0%": { transform: "translateY(0px)" },
  "50%": { transform: "translateY(-5px)" },
  "100%": { transform: "translateY(5px)" },
};

const styles = StyleSheet.create({
  menuItem: {
    cursor: "pointer",
    marginBottom: "10px",
    marginRight: "20px",
    position: "absolute",
    fontWeight: "bold",
    top: 0,
    right: 0,
    zIndex: 99,
    backgroundColor: "#fff8f8",
    ":hover": {
      animationName: [fadeIn, bounce],
      animationDuration: "1s, 0.5s",
      animationIterationCount: "3, 3",
    },
  },
  hidden: {
    display: "none",
  },
  notifications: {
    display: "block",
    padding: "0",
    margin: "0",
    border: "2px dotted red",
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 100,
    width: "100%",
    height: "100vh",
    fontSize: "20px",
  },
  ul: {
    listStyleType: "none",
    padding: 0,
    margin: 0,
  },
  notificationItemDefault: {
    color: "rgb(4, 4, 126)",
  },
  notificationItemUrgent: {
    color: "rgb(255, 0, 0)",
  },
});

class Notifications extends Component {
  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length >
        this.props.listNotifications.length ||
      nextProps.displayDrawer !== this.props.displayDrawer
    );
  }

  handleClick = () => {
    console.log("Close button has been clicked. Hide Handle Drawer");
    this.props.handleHideDrawer();
  };

  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  };

  render() {
    const {
      displayDrawer = false,
      listNotifications = [],
      handleDisplayDrawer,
    } = this.props;

    return (
      <>
        {!displayDrawer && (
          <div className={css(styles.menuItem)} onClick={handleDisplayDrawer}>
            Your notifications
          </div>
        )}

        {displayDrawer && (
          <div className={css(styles.notifications)}>
            <button
              style={{
                float: "right",
                border: "none",
                backgroundColor: "white",
              }}
              aria-label="Close"
              onClick={this.handleClick}
            >
              X
            </button>
            <p>Here is the list of notifications</p>
            <ul className={css(styles.ul)}>
              {listNotifications.length === 0 ? (
                <NotificationItem value="No new notification for now" />
              ) : (
                listNotifications.map((notification) => (
                  <NotificationItem
                    key={notification.id}
                    type={notification.type}
                    value={notification.value}
                    html={notification.html}
                    markAsRead={() => this.markAsRead(notification.id)}
                    className={css(
                      notification.type === "default"
                        ? styles.notificationItemDefault
                        : styles.notificationItemUrgent
                    )}
                  />
                ))
              )}
            </ul>
          </div>
        )}
      </>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NOTIFICATION_SHAPE),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
};

export default Notifications;
