import React from "react";
import "./Notifications.css";
import { getLatestNotification } from "./utils";

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
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
          data-priority="urgent"
        ></li>
      </ul>
    </div>
  );
}

export default Notifications;
