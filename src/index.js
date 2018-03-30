import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Root from './components/root/root';
import configureStore from './redux/configureStore';
import authActions from './redux/actions/auth';

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
  store.dispatch(authActions.login(user));

  return (
    <Provider key={user.id} store={store}>
      <Root />
    </Provider>
  );
});

ReactDOM.render(content, document.getElementById('app'));
