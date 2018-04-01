import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import roomActions from '../../redux/actions/rooms';

class Root extends React.Component {
  componentWillReceiveProps(newProps) {
    // only for demo, first time user logging in
    // open private chat room with the other person
    if (!this.props.socket && newProps.socket) {
      this.props.dispatch(roomActions.createPrivateRoom(newProps.otherUserId));
    }
  }

  render() {
    if (!this.props.currentUser) {
      return <div>Not Logged In</div>;
    }

    if (!this.props.socket) {
      return <div>Logged In. Not Connected</div>;
    }

    return <div>Ready to go. Hello, {this.props.currentUser.name}!</div>;
  }
}

Root.propTypes = {
  currentUser: PropTypes.object,
  socket: PropTypes.object
};

const mapStateToProps = ({ socket, users }) => ({
  socket,
  currentUser: users.byId[users.current]
});

export default connect(mapStateToProps)(Root);
