import React from 'react';
import ReactNative from 'react-native';
import reducer from './reducer';
import {initialState} from './reducer';
import * as types from './actionTypes';
import * as actions from './actions';

it('should handle SELECT_NEW_BOOK', () => {
  let state = initialState;
  expect(reducer(state, actions.selectNewBook(
    {
      title: "The Evolution of Civilizations",
      author: "Carroll Quigley"
    }
  ))).toMatchSnapshot();
})

it('should handle ADMIN_ADD_BOOK', () => {
  let state = initialState;
  expect(reducer(state, actions.submitInfo(
    {
      title: "New Book",
      author: "Famous Author"
    }, 'AdminAddBook'
  ))).toMatchSnapshot();
})

it('should handle USER_INFO', () => {
  let state = initialState;
  expect(reducer(state, actions.submitInfo(
    {
      firstName: "_",
      lastName: "_",
      email: "_"
    }, 'UserInfo'
  ))).toMatchSnapshot();
})

it('should handle DELIVERY_AND_BILLING', () => {
  let state = initialState;
  expect(reducer(state, actions.submitInfo(
    {
      lineOne: "_",
      lineTwo: "_",
      city: "_",
      state: "_",
      zip: "_"
    }, 'Delivery', true
  ))).toMatchSnapshot();
})

it('should handle DELIVERY', () => {
  let state = initialState;
  expect(reducer(state, actions.submitInfo(
    {
      lineOne: "_",
      lineTwo: "_",
      city: "_",
      state: "_",
      zip: "_"
    }, 'Delivery', false
  ))).toMatchSnapshot();
})

it('should handle BILLING', () => {
  let state = initialState;
  expect(reducer(state, actions.submitInfo(
    {
      lineOne: "_",
      lineTwo: "_",
      city: "_",
      state: "_",
      zip: "_"
    }, 'Billing'
  ))).toMatchSnapshot();
})

it('should handle PAYMENT_INFO', () => {
  let state = initialState;
  expect(reducer(state, actions.submitInfo(
    {
      nameOnCard: "_",
      cardNumber: "_",
      securityCode: "_"
    }, 'PaymentInfo'
  ))).toMatchSnapshot();
})

it('should handle SUBMIT_ORDER', () => {
  let state = initialState;
  expect(reducer(state, actions.submitInfo(
    {
      title: "The Evolution of Civilizations",
      author: "Carroll Quigley",
      date: new Date("Sat Mar 18 2017 16:38:08 GMT-0400 (EDT)")
    }, 'SubmitOrder'
  ))).toMatchSnapshot();
})
