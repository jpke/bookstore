import React from 'react';
import ReactNative from 'react-native';
import reducer from './reducer';
import {initialState} from './reducer';
import * as types from './actionTypes';
import * as actions from './actions';

it('should handle SELECT_NEW_BOOK', () => {
  let state = initialState;
  expect(reducer(state, actions.selectNewBook({
    title: "The Evolution of Civilizations",
    author: "Carroll Quigley",
  }))).toMatchSnapshot();
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
