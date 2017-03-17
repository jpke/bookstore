import React from 'react';
import { StyleSheet,
         Text,
         TextInput,
         TouchableHighlight,
         View
       } from 'react-native';

export default class ReviewOrder extends React.Component {
  constructor(props) {
    super(props);
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
        <View style={styles.selectedBook}>
          <Text style={styles.title}>Review Order</Text>
            <View>
              <Text>{this.props.bookToOrder.title}</Text>
            </View>
            <View>
              <Text>{this.props.creditCardInfo.nameOnCard || "incomplete"}</Text>
              <Text>{this.props.creditCardInfo.cardNumber || "incomplete"}</Text>
              <Text>{this.props.creditCardInfo.securityCode || "incomplete"}</Text>
            </View>
            <View>
              <Text>{this.props.useDeliveryAddressAsBilling ? "Billing and Delivery Address" : "Billing Address"}</Text>
              <Text>{this.props.billingAddress.lineOne || "incomplete"}</Text>
              {this.props.billingAddress.lineTwo && <Text>{this.props.billingAddress.lineTwo || "incomplete"}</Text>
              }
              <Text>{this.props.billingAddress.city || "incomplete"}</Text>
              <Text>{this.props.billingAddress.state || "incomplete"}</Text>
              <Text>{this.props.billingAddress.zip || "incomplete"}</Text>
            </View>
            {!this.props.useDeliveryAddressAsBilling &&
              <View>
                <Text>Delivery Address</Text>
                <Text>{this.props.deliveryAddress.lineOne || "incomplete"}</Text>
                {this.props.deliveryAddress.lineTwo && <Text>{this.props.deliveryAddress.lineTwo || "incomplete"}</Text>}
                <Text>{this.props.deliveryAddress.city || "incomplete"}</Text>
                <Text>{this.props.deliveryAddress.state || "incomplete"}</Text>
                <Text>{this.props.deliveryAddress.zip || "incomplete"}</Text>
              </View>
            }
        </View>
        <View style={styles.menu}>
          <TouchableHighlight style={styles.button} onPress={() => {
              this.props.submitInfo(this.props.bookToOrder, 'SubmitOrder');
              this.navigate('OrderHistory');}
          }>
            <Text style={styles.menuItem}>Submit Order</Text>
          </TouchableHighlight>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  selectedBook: {
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 25,
  },
  input: {
    height: 50,
    width: 250,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#6799FF',
    marginTop: 3,
    padding: 5,
    borderRadius: 5
  },
  bookAuthor: {
    fontSize: 15,
    padding: 5
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
