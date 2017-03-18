import React from 'react';
import ReactNative from 'react-native';
import OrderHistory from './OrderHistory';

import renderer from 'react-test-renderer';

function submitInfo(info, type, option) {
  console.log("order info to save to app state: ", info, type, option);
}

it('renders correctly', () => {
  const tree = renderer.create(
    <OrderHistory
      orders={[
        {
          title: "The Lexus and the Olive Tree",
          author: "Thomas Friedman",
          date: new Date("Sat Mar 18 2017 16:38:08 GMT-0400 (EDT)")
        },
        {
          title: "Wit and Wisdom",
          author: "Toby Reynolds",
          date: new Date("Fri Mar 17 2017 16:40:30 GMT-0400 (EDT)")
        }
      ]}/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
})
