import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export default class Order extends React.Component {
  navigate(routeName) {
    if(routeName === "HomeScreen") {
      this.props.navigator.popToTop(0);
    } else {
      this.props.navigator.push({
        name: routeName
      });
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.selectedBook}>
          <View style={styles.header}>
            <View style={{flex: 1}}>
              <TouchableHighlight style={styles.homeButton} onPress={() => this.navigate('HomeScreen')}>
                <Text style={styles.menuItem}>Home</Text>
              </TouchableHighlight>
            </View>
            <Text style={styles.title}>Order</Text>
            <View style={{flex: 1}}></View>
          </View>
          <View style={styles.bookInfo}>
            <TouchableHighlight style={styles.innerBookInfo} onPress={() => this.navigate('UserInfo')}>
              <View style={{alignItems: 'center'}}>
                <Text style={styles.bookTitle}>{this.props.selectedTitle}</Text>
                <Text style={styles.bookAuthor}>{this.props.selectedAuthor}</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.menu}>
          <TouchableHighlight style={styles.button} onPress={() => this.navigate('OrderHistory')}>
            <Text style={styles.menuItem}>Order History</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} onPress={() => this.navigate('UserInfo')}>
            <Text style={styles.menuItem}>Buy</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  header: {
    marginTop: 15,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start'
  },
  selectedBook: {
    flex: 6,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    flex: 1,
    fontSize: 40,
    color: '#ffcd67',
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 4,
    textAlign: 'center'
  },
  bookInfo: {
    flex: 3,
  },
  innerBookInfo: {
    backgroundColor: 'rgba(255,205,103,0.8)',
    width: 320,
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  bookTitle: {
    fontSize: 30,
    padding: 5,
    color: '#fff',
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 4
  },
  bookAuthor: {
    fontSize: 26,
    padding: 5,
  },
  menu: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  menuItem: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  homeButton: {
    backgroundColor: '#6799FF',
    width: 80,
    margin: 5,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#6799FF',
    // flex: 1,
    width: 150,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
  }
});
