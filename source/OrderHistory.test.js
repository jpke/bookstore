import React from 'react';
import ReactNative from 'react-native';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from './store';
const store = configureStore();

import OrderHistory from './OrderHistory';

it('renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <OrderHistory />
    </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
})
