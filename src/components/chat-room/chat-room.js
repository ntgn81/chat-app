import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ChatRoom extends React.Component {
  render() {
    return <div>Content</div>;
  }
}

ChatRoom.propTypes = {
  currentUser: PropTypes.object,
  socket: PropTypes.object
};

export default connect()(ChatRoom);
