import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const App = props => {
  if (!props.currentUser) {
    return <div>Not Logged In</div>;
  }

  if (!props.socket) {
    return <div>Logged In. Not Connected</div>;
  }
  return <div>Ready to go. Hello, {props.currentUser.name}!</div>;
};

App.propTypes = {
  currentUser: PropTypes.string,
  socket: PropTypes.object
};

const mapStateToProps = ({ socket, users }) => ({
  socket,
  currentUser: users.byId[users.current]
});

export default connect(mapStateToProps)(App);
