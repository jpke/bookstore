import React from 'react';
import ReactNative from 'react-native';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from './store';
const store = configureStore();

import Admin from './Admin';

it('renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Admin />
    </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
})
