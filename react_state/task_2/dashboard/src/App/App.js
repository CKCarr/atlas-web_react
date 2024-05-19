import React from "react";
import PropTypes from "prop-types";
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
  footer: {
    borderTop: "2px solid #FF0000",
    textAlign: "center",
    fontStyle: "italic",
    width: "100%",
    position: "fixed",
    bottom: 0,
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
      user: {
        email: "",
        password: "",
        isLoggedIn: false,
      },
    };
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  handleDisplayDrawer = () => {
    this.setState({ displayDrawer: true });
    console.log("Display drawer Open");
  };

  handleHideDrawer = () => {
    this.setState({ displayDrawer: false });
    console.log("Display drawer Closed");
  };

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
    const { displayDrawer, user } = this.state;
    const value = {
      user,
      logOut: this.logOut,
    };

    return (
      <AppContext.Provider value={value}>
        <Notifications
          listNotifications={listNotifications}
          displayDrawer={displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
        />
        <div className={css(styles.body)}>
          <Header />
          {user.isLoggedIn ? (
            <>
              <BodySectionWithMarginBottom title="Course List">
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom>
            </>
          ) : (
            <>
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login logIn={this.logIn} />
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
          <Footer className={css(styles.footer)} />
        </div>
      </AppContext.Provider>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
};

export default App;
