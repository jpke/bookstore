import React from 'react';
import ReactNative from 'react-native';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from './store';
const store = configureStore();

import AddressInfo from './AddressInfo';

it('renders correctly in "Delivery" view', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <AddressInfo
        addressType={'Delivery'}
        address={{
          lineOne: "",
          lineTwo: "",
          city: "",
          state: "",
          zip: ""
        }} />
    </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
})

it('renders correctly in "Billing" view', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <AddressInfo
        addressType={'Billing'}
        address={{
          lineOne: "",
          lineTwo: "",
          city: "",
          state: "",
          zip: ""
        }} />
    </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
})
