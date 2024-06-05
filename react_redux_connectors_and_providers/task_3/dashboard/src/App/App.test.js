// src/App/App.test.js

import React from 'react';
import { shallow } from 'enzyme';
import App, { UnconnectedApp, mapStateToProps } from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import { listNotifications } from './App';
import { displayNotificationDrawer, hideNotificationDrawer } from '../actions/uiActionCreators';

describe('App Component', () => {
  let props;

  beforeEach(() => {
    props = {
      isLoggedIn: false,
      displayDrawer: false,
      displayNotificationDrawer: jest.fn(),
      hideNotificationDrawer: jest.fn(),
      loginRequest: jest.fn(),
      user: {
        email: "",
        password: "",
        isLoggedIn: false,
      },
    };
  });

  it('contains Notifications component', () => {
    const wrapper = shallow(<UnconnectedApp {...props} />);
    expect(wrapper.find(Notifications).exists()).toBe(true);
  });

  it('contains Header component', () => {
    const wrapper = shallow(<UnconnectedApp {...props} />);
    expect(wrapper.find(Header).exists()).toBe(true);
  });

  it('contains Footer component', () => {
    const wrapper = shallow(<UnconnectedApp {...props} />);
    expect(wrapper.find(Footer).exists()).toBe(true);
  });

  it('does not display CourseList when user is not logged in', () => {
    const wrapper = shallow(<UnconnectedApp {...props} />);
    expect(wrapper.find(Login).exists()).toBe(true);
    expect(wrapper.find(CourseList).exists()).toBe(false);
  });

  it('displays CourseList when user is logged in', () => {
    props.isLoggedIn = true;
    const wrapper = shallow(<UnconnectedApp {...props} />);
    expect(wrapper.find(Login).exists()).toBe(false);
    expect(wrapper.find(CourseList).exists()).toBe(true);
  });

  it('calls displayNotificationDrawer action when handleDisplayDrawer is called', () => {
    const wrapper = shallow(<UnconnectedApp {...props} />);
    wrapper.instance().props.displayNotificationDrawer();
    expect(props.displayNotificationDrawer).toHaveBeenCalled();
  });

  it('calls hideNotificationDrawer action when handleHideDrawer is called', () => {
    const wrapper = shallow(<UnconnectedApp {...props} />);
    wrapper.instance().props.hideNotificationDrawer();
    expect(props.hideNotificationDrawer).toHaveBeenCalled();
  });

  it('verifies that markNotificationAsRead works as intended', () => {
    const wrapper = shallow(<UnconnectedApp {...props} />);
    wrapper.instance().markNotificationAsRead(2);
    const updatedNotifications = wrapper.state().listNotifications;
    expect(updatedNotifications).toHaveLength(listNotifications.length - 1);
    expect(updatedNotifications.find((n) => n.id === 2)).toBeUndefined();
  });

  describe('mapStateToProps', () => {
    it('should verify that the function returns the right object when passing the state', () => {
      let state = fromJS({
        isUserLoggedIn: true,
        isNotificationDrawerVisible: true,
      });
      const expectedProps = {
        isLoggedIn: true,
        displayDrawer: true,
      };
      const result = mapStateToProps(state);
      expect(result).toEqual(expectedProps);
    });
  });
});
