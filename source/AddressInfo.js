import React from 'react';
import {connect} from 'react-redux';
import {submitInfo} from './actions';
import { StyleSheet,
         Text,
         TextInput,
         TouchableHighlight,
         Switch,
         View
       } from 'react-native';

class AddressInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lineOne: this.props.address.lineOne,
      lineTwo: this.props.address.lineTwo,
      city: this.props.address.city,
      state: this.props.address.state,
      zip: this.props.address.zip,
      useAsBilling: this.props.addressType === 'Billing' ? true : false
    };
  }

  navigate(routeName, option) {
    if(routeName === "HomeScreen") {
      this.props.navigator.popToTop(0);
    } else {
      this.props.navigator.push({
        name: routeName,
        option
      });
    }
  }

  updateState(text, item) {
    item === 'lineOne' && this.setState({lineOne: text});
    item === 'lineTwo' && this.setState({lineTwo: text});
    item === 'city' && this.setState({city: text});
    item === 'state' && this.setState({state: text});
    item === 'zip' && this.setState({zip: text});
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <View style={styles.header}>
            <View style={{flex: 1}}>
              <TouchableHighlight style={styles.homeButton} onPress={() => this.navigate('HomeScreen')}>
                <Text style={styles.menuItem}>Home</Text>
              </TouchableHighlight>
            </View>
            <Text style={styles.title}>{this.props.addressType + " address"}</Text>
            <View style={{flex: 1}}></View>
          </View>
          <View style={styles.inputForm}>
            <View style={styles.inputFormInnerContainer}>
              <TextInput style={styles.input}
                value={this.state.lineOne}
                placeholder="Address Line One"
                onChangeText={(text) => this.updateState(text, 'lineOne')}/>
              <TextInput style={styles.input}
                value={this.state.lineTwo}
                placeholder="Address Line Two"
                onChangeText={(text) => this.updateState(text, 'lineTwo')}/>
              <TextInput style={styles.input}
                value={this.state.city}
                placeholder="City"
                onChangeText={(text) => this.updateState(text, 'city')}/>
              <TextInput style={styles.input}
                value={this.state.state}
                placeholder="State"
                onChangeText={(text) => this.updateState(text, 'state')}/>
              <TextInput style={styles.input}
                value={this.state.zip}
                placeholder="Zip"
                onChangeText={(text) => this.updateState(text, 'zip')}/>
              {this.props.addressType === 'Delivery' &&
                <View style={styles.switchContainer}>
                  <Text style={styles.switchLabel}>
                    Use As Billing Address?
                  </Text>
                  <Switch onValueChange={(value) => this.setState({useAsBilling: value})}
                    value={this.state.useAsBilling}
                    tintColor='#fff'
                    thumbTintColor='#6799FF'
                  />
                </View>}
            </View>
          </View>
        </View>
        <View style={styles.menu}>
          <TouchableHighlight style={styles.button} onPress={() => this.props.navigator.pop()}>
            <Text style={styles.menuItem}>Back</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} onPress={() => {
              this.props.submitInfo({
                lineOne: this.state.lineOne,
                lineTwo: this.state.lineTwo,
                city: this.state.city,
                state: this.state.state,
                zip: this.state.zip
              }, this.props.addressType, this.state.useAsBilling);
              this.navigate(this.state.useAsBilling ? 'PaymentInfo' : 'AddressInfo');}
          }>
            <Text style={styles.menuItem}>Next</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    placeholder: "",
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
)(AddressInfo);

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
  inputContainer: {
    flex: 6,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    flex: 2,
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
    justifyContent: 'flex-start',
  },
  input: {
    flex: 1,
    maxHeight: 70,
    width: 250,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#ffcd67',
    backgroundColor: '#ffcd67',
    margin: 6,
    padding: 5,
    borderRadius: 5
  },
  switchContainer: {
    alignItems: 'center'
  },
  switchLabel: {
    fontSize: 18,
    color: '#fff',
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 4,
    textAlign: 'center'
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
