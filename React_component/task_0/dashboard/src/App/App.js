import React, { useState } from "react";
import PropTypes from "prop-types";
import { mount } from "enzyme";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";
import { getLatestNotification } from "../utils/utils";

import "./App.css";

export const listCourses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

export const listNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
];

class App extends React.Component {
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
    console.log("Component did mount");
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
    console.log("Unmounting");
  }

  handleKeyPress = (event) => {
    if (event.ctrlKey && event.key === "h") {
      event.preventDefault();
      alert("Logging you out");
      this.props.logOut();
    }
  };

  render() {
    const { isLoggedIn } = this.props;

    return (
      <>
        <div className="App">
          <Notifications listNotifications={listNotifications} />
          <Header />
          {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
          <Footer />
        </div>
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

App.propDefault = {
  isLoggedIn: false,
  logOut: () => {},
};

export default App;
