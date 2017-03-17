import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export default class HomeScreen extends React.Component {
  navigate(routeName) {
    console.log("routeName: ", routeName);
    this.props.navigator.push({
      name: routeName
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to the BookStore</Text>
        <View style={styles.bookList}>
          <Text style={styles.menuItem}>Your Books</Text>
          {this.props.books.map((book, index) => {
            return (
              <View key={index} style={styles.book}>
                <Text>{book.title}</Text>
                <Text>{book.author}</Text>
              </View>
            )
          })}
        </View>
        <View style={styles.menu}>
          <TouchableHighlight style={styles.button} onPress={() => this.navigate('OrderHistory')}>
            <Text style={styles.menuItem}>Orders</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} onPress={() => this.navigate('Admin')}>
            <Text style={styles.menuItem}>Admin</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 25,
  },
  bookList: {
    height: 300,
    justifyContent: 'space-between',
  },
  book: {
    height: 20,
    alignItems: 'stretch',
    backgroundColor: '#ffcd67',
    padding: 5

  },
  menu: {
    height: 100,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  menuItem: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  button: {
    backgroundColor: '#6799FF',
    width: 250,
    padding: 10,
    margin: 5,
    borderRadius: 10,
    alignItems: 'center',
  }
});
