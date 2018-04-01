import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Root from './components/root/root';
import configureStore from './redux/configureStore';
import authActions from './redux/actions/auth';

import mockData from './mock-data';

require('./index.scss');

const content = mockData.users.map((user, i) => {
  const store = configureStore();
  store.dispatch(authActions.login(user));

  // only for demo, to make Laura & Rob open a chat with each other
  // when they are ready
  const otherUser = mockData.users[Number(!i)];

  return (
    <Provider key={user.id} store={store}>
      <Root otherUserId={otherUser.id} />
    </Provider>
  );
});

ReactDOM.render(content, document.getElementById('app'));
