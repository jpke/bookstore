import React from 'react';
import { StyleSheet,
         Text,
         TouchableHighlight,
         View,
         ListView
       } from 'react-native';
import formatAMPM from './dateFormatter';

export default class OrderHistory extends React.Component {
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
        <View style={styles.header}>
          <View style={{flex: 1}}>
          </View>
          <Text style={styles.title}>Order History</Text>
          <View style={{flex: 1}}></View>
        </View>
        <View style={styles.bookList}>
          <ListView
            dataSource={this.state.dataSource.cloneWithRows(this.props.orders)}
            renderRow={(order) => {
              return (
                <View>
                  <View style={styles.rowContainer}>
                    <Text style={styles.bookTitle}>{order.title}</Text>
                    <Text style={styles.bookAuthor}>{order.author}</Text>
                    <Text style={styles.bookDate}>{"Ordered " + formatAMPM(order.date) + " on " + order.date.toDateString()}</Text>
                  </View>
                  <View style={styles.separator}/>
                </View>
                )}}
          />
        </View>
        <View style={styles.menu}>
          <TouchableHighlight style={styles.button} onPress={() => this.props.navigator.pop()}>
            <Text style={styles.menuItem}>Back</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} onPress={() => this.navigate('HomeScreen')}>
            <Text style={styles.menuItem}>Home</Text>
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
    marginTop: 10,
    marginBottom: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  title: {
    flex: 4,
    fontSize: 40,
    color: '#ffcd67',
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 4,
    textAlign: 'center'
  },
  bookList: {
    flex: 5,
    // width: 320,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  rowContainer: {
    padding: 5,
    backgroundColor: '#ffcd67',
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 5
  },
  bookTitle: {
    fontSize: 15,
    padding: 5,
    width: 320,
  },
  bookAuthor: {
    fontSize: 12,
    padding: 5
  },
  bookDate: {
    fontSize: 12,
    padding: 5
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
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
