import React from 'react';
import { StyleSheet,
         Text,
         TextInput,
         TouchableHighlight,
         View
       } from 'react-native';

export default class PaymentInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameOnCard: this.props.creditCardInfo.nameOnCard,
      cardNumber: this.props.creditCardInfo.cardNumber,
      securityCode: this.props.creditCardInfo.securityCode
    };
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

  updateState(text, item) {
    item === 'nameOnCard' && this.setState({nameOnCard: text});
    item === 'cardNumber' && this.setState({cardNumber: text});
    item === 'securityCode' && this.setState({securityCode: text});
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
            <Text style={styles.title}>Credit Card Info</Text>
            <View style={{flex: 1}}></View>
          </View>
            <View style={styles.inputForm}>
              <TextInput style={styles.input}
                value={this.state.nameOnCard}
                placeholder="Name on Card"
                onChangeText={(text) => this.updateState(text, 'nameOnCard')}/>
              <TextInput style={styles.input}
                value={this.state.cardNumber}
                placeholder="Card Number"
                onChangeText={(text) => this.updateState(text, 'cardNumber')}/>
              <TextInput style={styles.input}
                value={this.state.securityCode}
                placeholder="Security Code"
                onChangeText={(text) => this.updateState(text, 'securityCode')}/>
            </View>
        </View>
        <View style={styles.menu}>
          <TouchableHighlight style={styles.button} onPress={() => this.props.navigator.pop()}>
            <Text style={styles.menuItem}>Back</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} onPress={() => {
              this.props.submitInfo({
                nameOnCard: this.state.nameOnCard,
                cardNumber: this.state.cardNumber,
                securityCode: this.state.securityCode
              }, 'PaymentInfo');
              this.navigate('ReviewOrder');}
          }>
            <Text style={styles.menuItem}>Review Order</Text>
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
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    marginTop: 10,
  },
  selectedBook: {
    flex: 6,
    alignItems: 'center',
    justifyContent: 'space-around',
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
  inputForm: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  input: {
    flex: 1,
    maxHeight: 70,
    width: 250,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#ffcd67',
    backgroundColor: '#ffcd67',
    margin: 1,
    padding: 5,
    borderRadius: 5
  },
  bookAuthor: {
    fontSize: 15,
    padding: 5
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
    width: 150,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
  }
});
