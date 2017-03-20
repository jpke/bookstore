import React from 'react';
import {connect} from 'react-redux';
import {submitInfo} from './actions';
import { StyleSheet,
         Text,
         TextInput,
         TouchableHighlight,
         View
       } from 'react-native';

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.newBook.title,
      author: this.props.newBook.author
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
    item === 'title' && this.setState({title: text});
    item === 'author' && this.setState({author: text});
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={{flex: 1}}></View>
          <Text style={styles.title}>Admin</Text>
          <View style={{flex: 1}}></View>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.innerInputContainer}>
            <Text style={styles.subTitle}>Add to Available Books</Text>
            <TextInput style={styles.input}
              value={this.state.firstName}
              placeholder="Title"
              onChangeText={(text) => this.updateState(text, 'title')}/>
            <TextInput style={styles.input}
              value={this.state.lastName}
              placeholder="Author"
              onChangeText={(text) => this.updateState(text, 'author')}/>
          </View>
          <View style={{flex: 1}}></View>
        </View>
        <View style={styles.menu}>
          <TouchableHighlight style={styles.button} onPress={() => this.navigate('HomeScreen')}>
            <Text style={styles.menuItem}>Back</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} onPress={() => {
              this.props.submitInfo({
                title: this.state.title,
                author: this.state.author,
              }, "AdminAddBook");
              this.navigate('HomeScreen');}
          }>
            <Text style={styles.menuItem}>Add Book</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    newBook: state.newBook,
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
)(Admin);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  header: {
    marginTop: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start'
  },
  title: {
    flex: 1,
    fontSize: 40,
    color: '#ffcd67',
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 4,
    textAlign: 'center'
  },
  inputContainer: {
    flex: 5,
    justifyContent: 'center',
  },
  innerInputContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  subTitle: {
    flex: 1,
    fontSize: 30,
    color: '#fff',
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 4,
  },
  input: {
    flex: 1,
    maxHeight: 70,
    width: 320,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#ffcd67',
    backgroundColor: '#ffcd67',
    margin: 8,
    padding: 5,
    borderRadius: 5
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
    width: 150,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
  }
});
