import React from 'react';
import ReactNative from 'react-native';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from './store';
const store = configureStore();

import HomeScreen from './HomeScreen';

it('renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
})
