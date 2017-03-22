import React from 'react';
import ReactNative from 'react-native';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from './store';
const store = configureStore();

import UserInfo from './UserInfo';

it('renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <UserInfo />
    </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
})
