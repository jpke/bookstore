import React from 'react';
import { StyleSheet,
         Text,
         TouchableHighlight,
         View,
         ListView,
       } from 'react-native';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    const dataSource = new ListView.DataSource(
      {rowHasChanged: (r1, r2) => r1.title !== r2.title}
    )
    this.state = {
      dataSource: dataSource
    }
  }


  navigate(routeName) {
    this.props.navigator.push({
      name: routeName
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Pocket BookStore</Text>
        <Text style={styles.subTitle}>Select from Available Books</Text>
          <View style={styles.bookList}>

            <ListView
              dataSource={this.state.dataSource.cloneWithRows(this.props.books)}
              renderRow={(book) => {
                return (
                    <View>
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
                  )}}
            />

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
  title: {
    marginTop: 45,
    fontSize: 35,
    flex: 1.5,
    color: '#ffcd67',
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 4
  },
  subTitle: {
    fontSize: 20,
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
    padding: 1,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 5,
  },
  bookTitle: {
    fontSize: 17,
    padding: 5,
    color: '#fff',
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 4
  },
  bookAuthor: {
    fontSize: 14,
    padding: 5,
    color: '#fff',
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 4
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
