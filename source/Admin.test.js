import React from 'react';
import ReactNative from 'react-native';
import Admin from './Admin';

import renderer from 'react-test-renderer';

function submitInfo(info, type, option) {
  console.log("order info to save to app state: ", info, type, option);
}

it('renders correctly', () => {
  const tree = renderer.create(
    <Admin
      newBook={{
              title: "",
              author: ""
            }}
      submitInfo={submitInfo}/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
})
