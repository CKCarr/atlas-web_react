// task_0/dashboard/src/schema/notifications.js

import { normalize, schema } from "normalizr";
import * as notificationsData from "../../notifications.json";

// schema.Entity args (key, definition = {}, options = {})

// define the schema user
const user = new schema.Entity("users");
// define the schema message
const message = new schema.Entity("messages", {}, { idAttribute: "guid" });
// define the schema notification
const notification = new schema.Entity(
  "notifications",
  {
    author: user,
    context: message,
  },
  {
    processStrategy: (value) => ({ ...value, isRead: false }),
  }
);

// normalize the notificationsData with the notification schema
export const normalizedData = normalize(notificationsData, [notification]);

// function that accepts userId as an argument and returns notifications for that user from the notifications.json file.
// returns list of all notifications for that author id that matches the given userId
export const getAllNotificationsByUser = (userId) => {
  const notifications = normalizedData.entities.notifications;
  const messages = normalizedData.entities.messages;

  return Object.values(notifications)
    .filter((notification) => notification.author == userId)
    .map((notification) => messages[notification.context]);
};

// task_4 : create a function notificationsNormalizer that would take data as argument and normalize it with the notification schema you created in the previous course.
export const notificationsNormalizer = (data) => {
  const normalizedData = normalize(data, [notification]);
  return normalizedData.entities.notifications || {};
};
