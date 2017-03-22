import * as types from './actionTypes';
import * as actions from './actions';

it('should create an action to select a book', () => {
  expect(actions.selectNewBook(
    {
      title: "The Evolution of Civilizations",
      author: "Carroll Quigley"
    }
  )).toMatchSnapshot();
})

it('should create an action to add a new available book', () => {
  expect(actions.submitInfo(
    {
      title: "New Book",
      author: "Famous Author"
    }, 'AdminAddBook'
  )).toMatchSnapshot();
})

it('should create an action to update state with user info', () => {
  expect(actions.submitInfo(
    {
      firstName: "_",
      lastName: "_",
      email: "_"
    }, 'UserInfo'
  )).toMatchSnapshot();
})

it('should create an action to update state with identical delivery and billing addresses', () => {
  expect(actions.submitInfo(
    {
      lineOne: "_",
      lineTwo: "_",
      city: "_",
      state: "_",
      zip: "_"
    }, 'Delivery', true
  )).toMatchSnapshot();
})

it('should create an action to update state with delivery address', () => {
  expect(actions.submitInfo(
    {
      lineOne: "_",
      lineTwo: "_",
      city: "_",
      state: "_",
      zip: "_"
    }, 'Delivery', false
  )).toMatchSnapshot();
})

it('should create an action to update state with billing address', () => {
  expect(actions.submitInfo(
    {
      lineOne: "_",
      lineTwo: "_",
      city: "_",
      state: "_",
      zip: "_"
    }, 'Billing'
  )).toMatchSnapshot();
})

it('should create an action to update state with payment info', () => {
  expect(actions.submitInfo(
    {
      nameOnCard: "_",
      cardNumber: "_",
      securityCode: "_"
    }, 'PaymentInfo'
  )).toMatchSnapshot();
})

it('should create an action to update state with submitted order', () => {
  expect(actions.submitInfo(
    {
      title: "The Evolution of Civilizations",
      author: "Carroll Quigley",
      date: new Date("Sat Mar 18 2017 16:38:08 GMT-0400 (EDT)")
    }, 'SubmitOrder'
  )).toMatchSnapshot();
})
