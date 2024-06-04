// src/App/App.js
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";
import BodySection from "../BodySection/BodySection";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import { StyleSheet, css } from "aphrodite";
import { getLatestNotification } from "../utils/utils";
import AppContext from "./AppContext";
import { displayNotificationDrawer, hideNotificationDrawer, loginRequest } from '../actions/uiActionCreators';

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

const styles = StyleSheet.create({
  body: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f5f5f5",
    color: "#333",
  },
});

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listNotifications: listNotifications,
      user: {
        email: "",
        password: "",
        isLoggedIn: false,
      },
    };
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  logIn = (email, password) => {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true,
      },
    });
  };

  logOut = () => {
    this.setState({
      user: {
        email: "",
        password: "",
        isLoggedIn: false,
      },
    });
    alert("Logging you out");
  };

  markNotificationAsRead(id) {
    this.setState((prevState) => ({
      listNotifications: prevState.listNotifications.filter(
        (notification) => notification.id !== id
      ),
    }));
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
    console.log("App Component is mounted");
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
    console.log("App Component is unmounted");
  }

  handleKeyPress = (event) => {
    if (event.ctrlKey && event.key === "h") {
      event.preventDefault();
      this.logOut();
      console.log("Keys ctrl + h pressed to log out");
    }
  };

  render() {
    const { listNotifications } = this.state;
    const { isLoggedIn, displayDrawer, displayNotificationDrawer, hideNotificationDrawer } = this.props;
    const value = {
      user: this.props.user,
      logOut: this.logOut,
    };

    return (
      <AppContext.Provider value={value}>
        <Notifications
          listNotifications={listNotifications}
          displayDrawer={displayDrawer}
          handleDisplayDrawer={displayNotificationDrawer}
          handleHideDrawer={hideNotificationDrawer}
          markNotificationAsRead={this.markNotificationAsRead}
        />
        <div className={css(styles.body)}>
          <Header />
          {isLoggedIn ? (
            <>
              <BodySectionWithMarginBottom title="Course List">
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom>
            </>
          ) : (
            <>
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login logIn={loginRequest} />
              </BodySectionWithMarginBottom>
              <BodySection title="News from the School">
                <h3>Stay informed with the latest updates from our school.</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                  ut, sunt optio ullam tempora numquam. Laborum minus in animi
                  vero cum soluta reprehenderit ab voluptatem inventore impedit!
                  Illum tempora enim velit quaerat aliquid magnam saepe natus
                  odio aliquam sint quo ipsa tempore necessitatibus, quis ut
                  nostrum reiciendis itaque quas repudiandae nemo quam. Laborum
                  alias blanditiis voluptate eius quidem facere. Architecto!
                </p>
              </BodySection>
            </>
          )}
        </div>
        <Footer className={css(styles.footer)} />
      </AppContext.Provider>
    );
  }
}

export const mapStateToProps = (state) => ({
  isLoggedIn: state.get("isUserLoggedIn"),
  displayDrawer: state.get('isNotificationDrawerVisible'),
});

export const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
  loginRequest,
};

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  displayDrawer: PropTypes.bool.isRequired,
  displayNotificationDrawer: PropTypes.func.isRequired,
  hideNotificationDrawer: PropTypes.func.isRequired,
  user: PropTypes.object,
  loginRequest: PropTypes.func.isRequired,
};

App.defaultProps = {
  user: {
    email: "",
    password: "",
    isLoggedIn: false,
  },
};

// Use named export for the unconnected component for testing purposes
export { App as UnconnectedApp };

// Default export the connected component
export default connect(mapStateToProps, mapDispatchToProps)(App);
