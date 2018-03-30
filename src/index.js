import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './app';
import configureStore from './redux/configureStore';
import socketConnect from './redux/actions/socket/connect';

require('./index.scss');

const users = [
  {
    id: 'u1',
    name: 'Laura'
  },
  {
    id: 'u2',
    name: 'Rob'
  }
];

const content = users.map(user => {
  const store = configureStore();
  store.dispatch(socketConnect());

  return (
    <Provider key={user.id} store={store}>
      <App />
    </Provider>
  );
});

ReactDOM.render(content, document.getElementById('app'));
