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

// Create a mock store
const mockStore = configureMockStore([]);
const store = mockStore(fromJS({
  isUserLoggedIn: false,
}));

// Reusable wrapper for connected App component
const getConnectedAppWrapper = (isLoggedIn = false) => (
  <Provider store={store}>
    <AppContext.Provider value={{ user: { isLoggedIn }, logOut: jest.fn() }}>
      <App />
    </AppContext.Provider>
  </Provider>
);

// Reusable wrapper for unconnected App component
const getUnconnectedAppWrapper = (isLoggedIn = false) => (
  <AppContext.Provider value={{ user: { isLoggedIn }, logOut: jest.fn() }}>
    <App />
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
    wrapper = shallow(getUnconnectedAppWrapper(false));
  });

  afterEach(() => {
    jest.clearAllMocks();
    if (wrapper) {
      wrapper.unmount();
    }
  });

  it("does not contain Login component when user is logged in", async () => {
    const instance = wrapper.dive().instance(); // Access the unconnected component instance
    console.log(instance); // Log the instance
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
    console.log(wrapper.debug()); // Log the component tree
    expect(wrapper.find(Login).exists()).toBe(false);
    expect(wrapper.find(CourseList).exists());
  });

  it('calls logOut and alerts when ctrl+h is pressed', async () => {
    const instance = wrapper.dive().instance(); // Access the unconnected component instance
    console.log(instance); // Log the instance
    const event = new KeyboardEvent('keydown', { key: 'h', ctrlKey: true });

    await act(async () => {
      document.dispatchEvent(event);
    });

    wrapper.update();

    expect(alertMock).toHaveBeenCalledWith('Logging you out');
  });

  it('should have default state for displayDrawer as false', () => {
    const instance = wrapper.dive().instance(); // Access the unconnected component instance
    console.log(instance); // Log the instance
    expect(instance.state.displayDrawer).toBe(false);
  });

  it('should update state to true when handleDisplayDrawer is called', () => {
    const instance = wrapper.dive().instance(); // Access the unconnected component instance
    console.log(instance); // Log the instance
    act(() => {
      instance.handleDisplayDrawer();
    });
    wrapper.update();
    expect(instance.state.displayDrawer).toBe(true);
  });

  it('should update state to false when handleHideDrawer is called', () => {
    const instance = wrapper.dive().instance(); // Access the unconnected component instance
    console.log(instance); // Log the instance
    act(() => {
      instance.handleDisplayDrawer(); // first set it to true
      instance.handleHideDrawer(); // then set it to false
    });
    wrapper.update();
    expect(instance.state.displayDrawer).toBe(false);
  });

  it('verifies that markNotificationAsRead works as intended', () => {
    const instance = wrapper.dive().instance(); // Access the unconnected component instance
    console.log(instance); // Log the instance
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
    });
    const expectedProps = {
      isLoggedIn: true,
    };
    const result = mapStateToProps(state);
    expect(result).toEqual(expectedProps);
  });
});
