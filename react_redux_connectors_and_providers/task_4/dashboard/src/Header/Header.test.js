import React from 'react';
import { shallow, mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';
import Header from './Header';

// Create a mock store
const mockStore = configureMockStore([]);
const store = mockStore(fromJS({
  isUserLoggedIn: false,
  isNotificationDrawerVisible: false,
  user: fromJS({
    email: "",
    isLoggedIn: false,
  }),
}));

describe("Test the <Header /> component...", () => {
  it("renders without crashing", () => {
    shallow(
      <Provider store={store}>
        <Header />
      </Provider>
    );
  });

  it("renders image and h1 tags", () => {
    const wrapper = mount(
      <Provider store={store}>
        <Header />
      </Provider>
    );
    expect(wrapper.find('img').exists()).toBe(true);
    expect(wrapper.find('h1').exists()).toBe(true);
  });
});
