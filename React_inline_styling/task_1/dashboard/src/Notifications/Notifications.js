import React, { Component } from "react";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import { NotificationItemShape } from "./NotificationItemShape";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  menuItem: {
    cursor: "pointer",
    marginBottom: "10px",
    marginRight: "20px",
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 99,
  },
  notifications: {
    display: "block",
    padding: "10px",
    margin: "20px",
    border: "2px dotted red",
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 100,
  },
  notificationItemDefault: {
    color: "rgb(4, 4, 126)",
    backgroundColor: "lightblue",
  },
  notificationItemUrgent: {
    color: "rgb(255, 0, 0)",
    backgroundColor: "pink",
  },
});

class Notifications extends Component {
  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length > this.props.listNotifications.length
    );
  }

  handleClick = () => {
    console.log("Close button has been clicked");
  };

  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  };

  render() {
    const { displayDrawer = false, listNotifications = [] } = this.props;

    return (
      <>
        <div className={css(styles.menuItem)}>Your notifications</div>
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
            <ul>
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
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;
