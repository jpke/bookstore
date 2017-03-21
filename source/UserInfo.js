import React from 'react';
import {connect} from 'react-redux';
import {submitInfo} from './actions';
import { StyleSheet,
         Text,
         TextInput,
         TouchableHighlight,
         View
       } from 'react-native';

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: this.props.userInfo.firstName,
      lastName: this.props.userInfo.lastName,
      email: this.props.userInfo.email
    };
  }

  navigate(routeName, option) {
    if(routeName === "HomeScreen") {
      this.props.navigator.popToTop(0);
    } else {
      this.props.navigator.push({
        name: routeName,
        option: option
      });
    }
  }

  updateState(text, item) {
    item === 'firstName' && this.setState({firstName: text});
    item === 'lastName' && this.setState({lastName: text});
    item === 'email' && this.setState({email: text});
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
            <Text style={styles.title}>Customer Info</Text>
            <View style={{flex: 1}}></View>
          </View>
          <View style={styles.inputForm}>
            <View style={styles.inputFormInnerContainer}>
              <TextInput style={styles.input}
                value={this.state.firstName}
                placeholder="First Name"
                onChangeText={(text) => this.updateState(text, 'firstName')}/>
              <TextInput style={styles.input}
                value={this.state.lastName}
                placeholder="Last Name"
                onChangeText={(text) => this.updateState(text, 'lastName')}/>
              <TextInput style={styles.input}
                value={this.state.email}
                placeholder="email"
                onChangeText={(text) => this.updateState(text, 'email')}/>
            </View>
          </View>
        </View>
        <View style={styles.menu}>
          <TouchableHighlight style={styles.button} onPress={() => this.props.navigator.pop()}>
            <Text style={styles.menuItem}>Back</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} onPress={() => {
              this.props.submitInfo({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email
              }, "UserInfo");
              this.navigate('AddressInfo', 'delivery');}
          }>
            <Text style={styles.menuItem}>Next</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    userInfo: state.userInfo,
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
)(UserInfo);

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
    flex: 3,
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
    maxHeight: 45,
    width: 250,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#ffcd67',
    backgroundColor: '#ffcd67',
    margin: 6,
    padding: 5,
    borderRadius: 5
  },
  bookTitle: {
    fontSize: 20,
    padding: 5
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
    width: 70,
    margin: 3,
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
