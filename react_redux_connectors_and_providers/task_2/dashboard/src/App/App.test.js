// src/App/App.test.js

import React, { act } from 'react';
import { shallow, mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';
import { UnconnectedApp as App, mapStateToProps } from './App'; // Import the unconnected component
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import AppContext from './AppContext';
import { listNotifications } from './App';
import { displayNotificationDrawer, hideNotificationDrawer } from '../actions/uiActionCreators';

// Create a mock store
const mockStore = configureMockStore([]);
const store = mockStore(fromJS({
  isUserLoggedIn: false,
  isNotificationDrawerVisible: false,
}));

// Reusable wrapper for connected App component
const getConnectedAppWrapper = (isLoggedIn = false, displayDrawer = false) => (
  <Provider store={store}>
    <AppContext.Provider value={{ user: { isLoggedIn }, logOut: jest.fn() }}>
      <App />
    </AppContext.Provider>
  </Provider>
);

// Reusable wrapper for unconnected App component
const getUnconnectedAppWrapper = (isLoggedIn = false, displayDrawer = false) => (
  <AppContext.Provider value={{ user: { isLoggedIn }, logOut: jest.fn() }}>
    <App
      isLoggedIn={isLoggedIn}
      displayDrawer={displayDrawer}
      displayNotificationDrawer={jest.fn()}
      hideNotificationDrawer={jest.fn()}
    />
  </AppContext.Provider>
);

describe('Connected App', () => {
  let wrapper;
  const mockLogOut = jest.fn();
  const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => { });

  beforeEach(() => {
    wrapper = mount(getConnectedAppWrapper(false));
  });

  afterEach(() => {
    jest.clearAllMocks();
    if (wrapper) {
      wrapper.unmount();
    }
  });

  it('contains Notifications component', () => {
    expect(wrapper.find(Notifications).exists()).toBe(true);
  });

  it('contains Header component', () => {
    expect(wrapper.find(Header).exists()).toBe(true);
  });

  it('contains Footer component', () => {
    expect(wrapper.find(Footer).exists()).toBe(true);
  });

  it('does not display CourseList when user is not logged in', () => {
    expect(wrapper.find(Login).exists()).toBe(true);
    expect(wrapper.find(CourseList).exists()).toBe(false);
  });
});

describe('Unconnected App', () => {
  let wrapper;
  const mockLogOut = jest.fn();
  const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => { });

  beforeEach(() => {
    wrapper = mount(getUnconnectedAppWrapper(false));
  });

  afterEach(() => {
    jest.clearAllMocks();
    if (wrapper) {
      wrapper.unmount();
    }
  });

  it("does not contain Login component when user is logged in", async () => {
    const instance = wrapper.find(App).instance(); // Access the unconnected component instance
    console.log('Before login:', instance.state);
    await act(async () => {
      instance.setState({
        user: {
          email: "test@test.com",
          password: "password",
          isLoggedIn: true,
        },
      });
    });
    wrapper.update();
    console.log('After login:', instance.state);
    console.log('Props:', wrapper.props());
    console.log('Component Tree:', wrapper.debug());
    expect(wrapper.find(Login).exists()).toBe(false);
    expect(wrapper.find(CourseList).exists()).toBe(true);
  });

  it('calls logOut and alerts when ctrl+h is pressed', async () => {
    const instance = wrapper.find(App).instance(); // Access the unconnected component instance
    const event = new KeyboardEvent('keydown', { key: 'h', ctrlKey: true });

    await act(async () => {
      document.dispatchEvent(event);
    });

    wrapper.update();

    expect(alertMock).toHaveBeenCalledWith('Logging you out');
  });

  // No need to test for handleDisplayDrawer and handleHideDrawer directly as they are handled by Redux actions
  it('calls displayNotificationDrawer action when handleDisplayDrawer is called', () => {
    const instance = wrapper.find(App).instance(); // Access the unconnected component instance
    const displayNotificationDrawerMock = jest.fn();
    wrapper.setProps({ displayNotificationDrawer: displayNotificationDrawerMock });

    act(() => {
      instance.props.displayNotificationDrawer();
    });
    wrapper.update();
    expect(displayNotificationDrawerMock).toHaveBeenCalled();
  });

  it('calls hideNotificationDrawer action when handleHideDrawer is called', () => {
    const instance = wrapper.find(App).instance(); // Access the unconnected component instance
    const hideNotificationDrawerMock = jest.fn();
    wrapper.setProps({ hideNotificationDrawer: hideNotificationDrawerMock });

    act(() => {
      instance.props.hideNotificationDrawer();
    });
    wrapper.update();
    expect(hideNotificationDrawerMock).toHaveBeenCalled();
  });

  it('verifies that markNotificationAsRead works as intended', () => {
    const instance = wrapper.find(App).instance(); // Access the unconnected component instance
    act(() => {
      instance.setState({ listNotifications });
    });
    wrapper.update();

    act(() => {
      instance.markNotificationAsRead(2);
    });
    wrapper.update();

    const updatedNotifications = instance.state.listNotifications;
    expect(updatedNotifications).toHaveLength(listNotifications.length - 1);
    expect(updatedNotifications.find((n) => n.id === 2)).toBeUndefined();
  });
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
