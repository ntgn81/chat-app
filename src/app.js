import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const App = props => {
  return !props.socket ? (
    <div>Initializing Socket</div>
  ) : (
    <div>Socket Initialized</div>
  );
};

App.propTypes = {
  socket: PropTypes.object
};

const mapStateToProps = ({ socket }) => ({ socket });

export default connect(mapStateToProps)(App);
