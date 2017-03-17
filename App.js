import React from 'react';
import { StyleSheet,
         Text,
         TouchableHighlight,
         View,
         Navigator
       } from 'react-native';
import HomeScreen from './HomeScreen';
import Booklist from './Booklist';
import Admin from './Admin';
import Order from './Order';
import OrderHistory from './OrderHistory'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      deliveryAddress: {
        lineOne: "",
        lineTwo: "",
        city: "",
        state: "",
        zip: ""
      },
      billingAddress: {
        lineOne: "",
        lineTwo: "",
        city: "",
        state: "",
        zip: ""
      },
      creditCardInfo: {
        nameOnCard: "",
        cardNumber: "",
        securityCode: ""
      },
      availableBooks: [
        {
          title: "The Evolution of Civilizations",
          author: "Carroll Quigley"
        },
        {
          title: "How the Mind Works",
          author: "Stephan Pinker"
        }
      ],
      orders: [
        {
          title: "The Lexus and the Olive Tree",
          author: "Thomas Friedman",
          date: new Date()
        },
        {
          title: "Wit and Wisdom",
          author: "Toby Reynolds",
          date: new Date(Date.now() + (1000*60*60*24))
        }
      ],
      selectedTitle: "",
      selectedAuthor: ""
    }
  }

  selectNewBook(newBook) {
    console.log("available book to order: ", newBook);
  }

  submitOrderInfo(orderInfo) {
    console.log("order info to save to app state: ", orderInfo);
  }

  addBook(newBook) {
    console.log("new book to add to available books: ", newBook);
  }

  renderScene(route, navigator) {
   console.log("route here: ", route);
   if(route.name == 'HomeScreen') {
     return <HomeScreen navigator={navigator}
            books={this.state.availableBooks}
            selectBook={this.selectNewBook}/>
   }
   if(route.name == 'Admin') {
     return <Admin navigator={navigator}
            addBook={this.addBook}/>
   }
   if(route.name == 'Order') {
     return <Order navigator={navigator}
            submitOrderInfo={this.submitOrderInfo}
            selectedTitle={this.state.selectedTitle}
            selectedAuthor={this.state.selectedAuthor}/>
   }
   if(route.name == 'OrderHistory') {
     return <OrderHistory navigator={navigator}
            orders={this.state.orders}/>
   }
  }
  render() {
   console.log("app view loaded")
   return (
     <View style={styles.container}>
       <Navigator
         initialRoute={{name: 'HomeScreen'}}
         renderScene={this.renderScene.bind(this)}
       />
     </View>
   );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
