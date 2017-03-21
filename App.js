import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './source/store';
import Root from './source/Root';

const store = configureStore();

export default class App extends React.Component {

  render() {
   return (
     <Provider store={store}>
       <Root />
     </Provider>
   );
  }
}
