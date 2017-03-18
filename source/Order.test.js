import React from 'react';
import ReactNative from 'react-native';
import Order from './Order';

import renderer from 'react-test-renderer';

function submitInfo(info, type, option) {
  console.log("order info to save to app state: ", info, type, option);
}

it('renders correctly', () => {
  const tree = renderer.create(
    <Order
      submitOrderInfo={submitInfo}
      selectedTitle={"The Evolution of Civilizations"}
      selectedAuthor={"Carroll Quigley"}/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
})
