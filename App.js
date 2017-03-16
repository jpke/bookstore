import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to the BookStore</Text>
        <View style={styles.menu}>
          <TouchableHighlight style={styles.button} onPress={() => console.log("pressed")}>
            <Text style={styles.menuItem}>Your Books</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} onPress={() => console.log("pressed")}>
            <Text style={styles.menuItem}>Get Books</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} onPress={() => console.log("pressed")}>
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
  menu: {
    height: 200,
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
