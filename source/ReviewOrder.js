import React from 'react';
import {connect} from 'react-redux';
import {submitInfo} from './actions';
import { StyleSheet,
         ScrollView,
         Text,
         TextInput,
         TouchableHighlight,
         View
       } from 'react-native';

class ReviewOrder extends React.Component {
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
          <View style={styles.header}>
            <View style={{flex: 1}}>
              <TouchableHighlight style={styles.homeButton} onPress={() => this.navigate('HomeScreen')}>
                <Text style={styles.menuItem}>Home</Text>
              </TouchableHighlight>
            </View>
            <Text style={styles.title}>Review Order</Text>
            <View style={{flex: 1}}></View>
          </View>
          <View style={styles.orderInfo}>
            <ScrollView>
              <View style={styles.innerBookInfo}>
                <Text style={styles.bookTitle}>{this.props.bookToOrder.title}</Text>
                <Text style={styles.bookAuthor}>{this.props.bookToOrder.author}</Text>
              </View>
              <View style={styles.itemInfo}>
                <Text style={styles.itemHeader}>Payment Information</Text>
                <Text style={styles.infoTitle}>name on card:</Text>
                <Text style={styles.info}> { this.props.creditCardInfo.nameOnCard}</Text>
                <Text style={styles.infoTitle}>card #:</Text>
                <Text style={styles.info}>
                  {this.props.creditCardInfo.cardNumber}</Text>
                <Text style={styles.infoTitle}>security code:</Text>
                <Text style={styles.info}>
                  {this.props.creditCardInfo.securityCode}</Text>
              </View>
              <View style={styles.itemInfo}>
                <Text style={styles.itemHeader}> {this.props.useDeliveryAddressAsBilling ? "Billing and Delivery Address" : "Billing Address"}</Text>
                <Text style={styles.infoTitle}>line one:</Text>
                <Text style={styles.info}>
                  {this.props.billingAddress.lineOne}</Text>
                <Text>
                  {this.props.billingAddress.lineTwo &&
                    <Text style={styles.infoTitle}>
                      line two:
                    </Text>
                  }
                </Text>
                <Text style={styles.infoContainer}>
                  {this.props.billingAddress.lineTwo &&
                    <Text style={styles.info}>
                      {this.props.billingAddress.lineTwo}
                    </Text>
                  }
                </Text>
                <Text style={styles.infoTitle}>city:</Text>
                <Text style={styles.info}>
                  {this.props.billingAddress.city}</Text>
                <Text style={styles.infoTitle}>state:</Text>
                <Text style={styles.info}>
                  {this.props.billingAddress.state}</Text>
                <Text style={styles.infoTitle}>zip:</Text>
                <Text style={styles.info}>
                  {this.props.billingAddress.zip}</Text>
              </View>
              {!this.props.useDeliveryAddressAsBilling &&
                <View style={styles.itemInfo}>
                  <Text style={styles.itemHeader}>Delivery Address</Text>
                  <Text style={styles.infoTitle}>line one:</Text>
                  <Text style={styles.info}>
                    {this.props.deliveryAddress.lineOne}</Text>
                  <Text>
                    {this.props.deliveryAddress.lineTwo &&
                      <Text style={styles.infoTitle}>
                        line two:
                      </Text>
                    }
                  </Text>
                  <Text style={styles.infoContainer}>
                    {this.props.deliveryAddress.lineTwo &&
                      <Text style={styles.info}>
                        {this.props.deliveryAddress.lineTwo}
                      </Text>
                    }
                  </Text>
                  <Text style={styles.infoTitle}>city:</Text>
                  <Text style={styles.info}>
                    {this.props.deliveryAddress.city}</Text>
                  <Text style={styles.infoTitle}>state:</Text>
                  <Text style={styles.info}>
                    {this.props.deliveryAddress.state}</Text>
                  <Text style={styles.infoTitle}>zip:</Text>
                  <Text style={styles.info}>
                    {this.props.deliveryAddress.zip}</Text>
                </View>
              }
            </ScrollView>
          </View>
        </View>
        <View style={styles.menu}>
          <TouchableHighlight style={styles.button} onPress={() => this.props.navigator.pop()}>
            <Text style={styles.menuItem}>Back</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} onPress={() => {
              this.props.submitInfo(this.props.bookToOrder, 'SubmitOrder');
              this.navigate('OrderHistory');}
          }>
            <Text style={styles.menuItem}>Submit Order</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    userInfo: state.userInfo,
    bookToOrder: state.bookToOrder,
    creditCardInfo: state.creditCardInfo,
    useDeliveryAddressAsBilling: state.useDeliveryAddressAsBilling,
    billingAddress: state.billingAddress,
    deliveryAddress: state.deliveryAddress
  }
}

function mapDispatchToProps(dispatch) {
  return {
    submitInfo: (info, type, option) => dispatch(submitInfo(info, type, option))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewOrder);

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
    flex: 3,
    fontSize: 40,
    color: '#ffcd67',
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 4,
    textAlign: 'center'
  },
  orderInfo: {
    flex: 5,
    width: 320,
  },
  itemHeader: {
    fontSize: 26,
    color: '#fff',
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 4,
    textAlign: 'center'
  },
  itemInfo: {
    flex: 3,
    marginTop: 6,
    marginBottom: 6,
    padding: 6,
    backgroundColor: 'rgba(255,205,103,0.8)',
    borderRadius: 5,
  },
  innerBookInfo: {
    flex: 4,
    backgroundColor: '#ffcd67',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  bookTitle: {
    fontSize: 28,
    padding: 5,
    textAlign: 'center'
  },
  bookAuthor: {
    fontSize: 24,
    padding: 5,
    textAlign: 'center'
  },
  infoTitle: {
    fontSize: 24,
    color: 'black',
  },
  infoContainer: {
    marginLeft: 60
  },
  info: {
    fontSize: 24,
    color: '#fff',
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 4,
    padding: 5,
    marginLeft: 60,
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
