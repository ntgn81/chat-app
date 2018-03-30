import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './app';
import configureStore from './redux/configureStore';
import socketConnect from './redux/actions/socket/connect';

require('./index.scss');

const store = configureStore();
store.dispatch(socketConnect());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
