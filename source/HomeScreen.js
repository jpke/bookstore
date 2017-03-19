import React from 'react';
import { StyleSheet,
         Text,
         TouchableHighlight,
         View,
         ScrollView,
       } from 'react-native';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
  }


  navigate(routeName) {
    this.props.navigator.push({
      name: routeName
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Pocket BookStore</Text>
          <Text style={styles.subTitle}>Select from Available Books</Text>
        </View>
        <View style={styles.bookList}>
          <ScrollView style={styles.bookList}>
            {this.props.books.map((book, index) => {
              return (
                  <View key={index}>
                    <TouchableHighlight style={styles.rowContainer}
                        onPress={() => {
                          this.props.selectBook(book)
                          this.navigate('Order')
                        }}>
                      <View>
                        <Text style={styles.bookTitle}>{book.title}</Text>
                        <Text style={styles.bookAuthor}>{book.author}</Text>
                      </View>
                    </TouchableHighlight>
                    <View style={styles.separator}/>
                  </View>
                )
              })
            }
          </ScrollView>
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
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  header: {
    marginTop: 15,
    marginBottom: 10,
    flex: 2.2,
    alignItems: 'center'
  },
  title: {
    fontSize: 40,
    flex: 1.5,
    alignItems: 'flex-end',
    color: '#ffcd67',
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 4
  },
  subTitle: {
    fontSize: 30,
    flex: 1,
    color: '#fff',
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 4
  },
  bookList: {
    flex: 6,
    width: 320,
  },
  rowContainer: {
    flex: 1,
    marginTop: 6,
    marginBottom: 6,
    padding: 6,
    backgroundColor: 'rgba(255,205,103,0.8)',
    borderRadius: 5,
  },
  bookTitle: {
    fontSize: 22,
    padding: 5,
    color: '#fff',
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 4
  },
  bookAuthor: {
    fontSize: 18,
    padding: 5,
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  menu: {
    flex: 1.5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  menuItem: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  button: {
    backgroundColor: '#6799FF',
    width: 100,
    padding: 10,
    margin: 5,
    borderRadius: 10,
    alignItems: 'center',
  }
});
