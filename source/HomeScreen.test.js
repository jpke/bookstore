import React from 'react';
import ReactNative from 'react-native';
import HomeScreen from './HomeScreen';

import renderer from 'react-test-renderer';

function selectNewBook(newBook) {
  console.log("available book to order: ", newBook);
  this.setState({
    bookToOrder: newBook
  })
}

it('renders correctly', () => {
  const tree = renderer.create(
    <HomeScreen
      books={[
        {
          title: "The Evolution of Civilizations",
          author: "Carroll Quigley",
        },
        {
          title: "How the Mind Works",
          author: "Stephan Pinker",

        }
      ]}
      selectBook={selectNewBook}/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
})
