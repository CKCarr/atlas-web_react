// task_0/dashboard/src/schema/notifications.js
import * as notificationsData from "../../notifications.json";

// function that accepts userId as an argument and returns all notifications for that user from the notifications.json file.
// returns list of all notifications for that user from the notifications.json file that matches the given userId

// console.log("Imported notifications data:", notificationsData);
// this passes

export const getAllNotificationsByUser = (userId) => {
  const notifications = notificationsData.default;

  // console.log('Imported notifications data:', notificationsData);
  // console.log('Filtered notifications:', notifications);

  return notifications
    .filter((notification) => notification.author.id === userId)
    .map((notification) => notification.context); // needed to map filtered notifications to contexts
};
