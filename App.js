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
import OrderHistory from './OrderHistory';
import UserInfo from './UserInfo';
import AddressInfo from './AddressInfo';
import PaymentInfo from './PaymentInfo';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userInfo: {
        firstName: "",
        lastName: "",
        email: ""
      },
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
          author: "Carroll Quigley",
        },
        {
          title: "How the Mind Works",
          author: "Stephan Pinker",

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
          date: new Date(Date.now() - (1000*60*60*24))
        }
      ],
      selectedTitle: "",
      selectedAuthor: ""
    }
  }

  selectNewBook(newBook) {
    console.log("available book to order: ", newBook);
    this.setState({
      selectedTitle: newBook.title,
      selectedAuthor: newBook.author
    })
  }

  submitInfo(info, type) {
    console.log("order info to save to app state: ", info, type);
  }

  addBook(newBook) {
    console.log("new book to add to available books: ", newBook);
  }

  renderScene(route, navigator) {
   console.log("route here: ", route);
   if(route.name == 'HomeScreen') {
     return <HomeScreen navigator={navigator}
            books={this.state.availableBooks}
            selectBook={this.selectNewBook.bind(this)}/>
   }
   if(route.name == 'Admin') {
     return <Admin navigator={navigator}
            addBook={this.addBook}/>
   }
   if(route.name == 'Order') {
     return <Order navigator={navigator}
            submitOrderInfo={this.submitInfo}
            selectedTitle={this.state.selectedTitle}
            selectedAuthor={this.state.selectedAuthor}/>
   }
   if(route.name == 'OrderHistory') {
     console.log("orders: ", this.state.orders);
     return <OrderHistory navigator={navigator}
            orders={this.state.orders}/>
   }
   if(route.name == 'UserInfo') {
     return <UserInfo navigator={navigator}
            userInfo={this.state.userInfo}
            submitInfo={this.submitInfo.bind(this)}/>
   }
   if(route.name == 'AddressInfo') {
     return <AddressInfo navigator={navigator}
            addressType={route.option === 'delivery' ? 'Delivery' : 'Billing'}
            address={route.option === 'delivery' ? this.state.deliveryAddress : this.state.billingAddress}
            submitInfo={this.submitInfo.bind(this)}/>
   }
   if(route.name == 'PaymentInfo') {
     return <PaymentInfo navigator={navigator}
            creditCardInfo={this.state.creditCardInfo}
            submitInfo={this.submitInfo.bind(this)}/>
   }
  }
  render() {
   console.log("app view loaded ")
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
