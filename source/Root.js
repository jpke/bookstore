import React from 'react';
import {connect} from 'react-redux';
import { StyleSheet,
         Text,
         TouchableHighlight,
         View,
         Navigator,
         Image
       } from 'react-native';
import HomeScreen from './HomeScreen';
import Admin from './Admin';
import Order from './Order';
import OrderHistory from './OrderHistory';
import UserInfo from './UserInfo';
import AddressInfo from './AddressInfo';
import PaymentInfo from './PaymentInfo';
import ReviewOrder from './ReviewOrder';


class Root extends React.Component {
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
      useDeliveryAddressAsBilling: false,
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
      bookToOrder: "",
      newBook: {
        title: "",
        author: ""
      }
    }
  }

  selectNewBook(newBook) {
    this.setState({
      bookToOrder: newBook
    })
  }

  submitInfo(info, type, option) {
    if(type === 'AdminAddBook') {
      if(info.title === "" || info.author === "") return;
      let books = this.state.availableBooks.concat(info);
      this.setState({
        availableBooks: books
      });
    }
    else if(type === 'UserInfo') {
      this.setState({
        userInfo: info
      });
    }
    else if(type === 'Delivery') {
      //use delivery address as billing address?
      option ?
        this.setState({
          deliveryAddress: info,
          billingAddress: info,
          useDeliveryAddressAsBilling: true
        })
      :
        this.setState({
          deliveryAddress: info,
          useDeliveryAddressAsBilling: false
        })
    }
    else if(type === 'Billing') {
      this.setState({
        billingAddress: info
      });
    }
    else if(type === 'PaymentInfo') {
      this.setState({
        creditCardInfo: info
      });
    }
    else if(type === 'SubmitOrder') {
      info.date = new Date();
      let orders = this.state.orders.concat(info);
      let books = this.state.availableBooks.slice();
      books = books.filter(book => book.title !== info.title)
      this.setState({
        orders: orders,
        availableBooks: books
      });
    }
  }

  renderScene(route, navigator) {
   if(route.name == 'HomeScreen') {
     return <HomeScreen navigator={navigator} />
   }
   if(route.name == 'Admin') {
     return <Admin navigator={navigator} />
   }
   if(route.name == 'Order') {
     return <Order navigator={navigator} />
   }
   if(route.name == 'OrderHistory') {
     return <OrderHistory navigator={navigator} />
   }
   if(route.name == 'UserInfo') {
     return <UserInfo navigator={navigator} />
   }
   if(route.name == 'AddressInfo') {
     return <AddressInfo navigator={navigator}
            addressType={route.option === 'delivery' ? 'Delivery' : 'Billing'}
            address={route.option === 'delivery' ? this.props.deliveryAddress : this.props.billingAddress}
            />
   }
   if(route.name == 'PaymentInfo') {
     return <PaymentInfo navigator={navigator}
            creditCardInfo={this.state.creditCardInfo}
            submitInfo={this.submitInfo.bind(this)}/>
   }
   if(route.name == 'ReviewOrder') {
     return <ReviewOrder navigator={navigator}
            userInfo={this.state.userInfo}
            bookToOrder={this.state.bookToOrder}
            creditCardInfo={this.state.creditCardInfo}
            useDeliveryAddressAsBilling={this.state.useDeliveryAddressAsBilling}
            billingAddress={this.state.billingAddress}
            deliveryAddress={this.state.deliveryAddress}
            submitInfo={this.submitInfo.bind(this)}/>
   }
  }
  render() {
   return (
     <View style={styles.container}>
       <Image source={require('./images/books.png')}
         style={styles.books}>
         <View style={styles.container}>
           <Navigator
             initialRoute={{name: 'HomeScreen'}}
             renderScene={this.renderScene.bind(this)}
           />
         </View>
       </Image>
     </View>
   );
  }
}

function mapStateToProps(state) {
  return {
    deliveryAddress: state.deliveryAddress,
    billingAddress: state.billingAddress
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  books: {
    flex: 1,
    width: null,
    resizeMode: 'cover'
  },
});
