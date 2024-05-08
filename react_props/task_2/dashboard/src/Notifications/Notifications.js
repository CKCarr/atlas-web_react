import React from "react";
import "./Notifications.css";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";

function Notifications() {
  // function to handle button click
  function handleClick() {
    console.log("Close button has been clicked");
  }

  return (
    <div className="Notifications">
      <button
        style={{ float: "right", border: "none", backgroundColor: "white" }}
        aria-label="Close"
        onClick={handleClick}
      >
        X
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem type="default" value="New course available" />
        <NotificationItem type="urgent" value="New resume available" />
        <NotificationItem
          type="urgent"
          html={{ __html: getLatestNotification() }}
        />
      </ul>
    </div>
  );
}

export default Notifications;
