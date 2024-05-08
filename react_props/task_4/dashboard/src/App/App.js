import React, { useState } from "react";
import PropTypes from "prop-types";

import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";

import "./App.css";

function App({ isLoggedIn = false }) {
  return (
    <>
      <div className="App">
        <Notifications />
        <Header />
        {isLoggedIn ? <CourseList /> : <Login />}
        <Footer />
      </div>
    </>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

App.propDefault = {
  isLoggedIn: false,
};

export default App;
