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
            address={route.option === 'delivery' ? this.props.deliveryAddress : this.props.billingAddress} />
   }
   if(route.name == 'PaymentInfo') {
     return <PaymentInfo navigator={navigator} />
   }
   if(route.name == 'ReviewOrder') {
     return <ReviewOrder navigator={navigator} />
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
