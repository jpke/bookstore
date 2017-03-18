import React from 'react';
import ReactNative from 'react-native';
import AddressInfo from './AddressInfo';

import renderer from 'react-test-renderer';

function submitInfo(info, type, option) {
  console.log("order info to save to app state: ", info, type, option);
}

it('renders correctly in "Delivery" view', () => {
  const tree = renderer.create(
    <AddressInfo
      addressType={'Delivery'}
      address={{
        lineOne: "",
        lineTwo: "",
        city: "",
        state: "",
        zip: ""
      }}
      submitInfo={submitInfo}/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
})

it('renders correctly in "Billing" view', () => {
  const tree = renderer.create(
    <AddressInfo
      addressType={'Billing'}
      address={{
        lineOne: "",
        lineTwo: "",
        city: "",
        state: "",
        zip: ""
      }}
      submitInfo={submitInfo}/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
})
