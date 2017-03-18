import React from 'react';
import ReactNative from 'react-native';
import ReviewOrder from './ReviewOrder';

import renderer from 'react-test-renderer';

function submitInfo(info, type, option) {
  console.log("order info to save to app state: ", info, type, option);
}

it('renders correctly', () => {
  const tree = renderer.create(
    <ReviewOrder
      userInfo={{
        firstName: "",
        lastName: "",
        email: ""
      }}
      bookToOrder={{
        title: "The Lexus and the Olive Tree",
        author: "Thomas Friedman",
        date: new Date()
      }}
      creditCardInfo={{
        nameOnCard: "",
        cardNumber: "",
        securityCode: ""
      }}
      useDeliveryAddressAsBilling={false}
      billingAddress={{
        lineOne: "",
        lineTwo: "",
        city: "",
        state: "",
        zip: ""
      }}
      deliveryAddress={{
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
