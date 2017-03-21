import React from 'react';
import ReactNative from 'react-native';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from './store';
const store = configureStore();

import Order from './Order';

it('renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Order />
    </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
})
