import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import roomActions from '../../redux/actions/rooms';
import ChatRoom from '../chat-room/chat-room';

require('./root.scss');

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

    return (
      <div className="root">
        <div className="user-header">
          <div>{this.props.currentUser.name}'s Chat Window</div>
        </div>
        <div className="user-content">
          {!!this.props.currentRoom && (
            <ChatRoom roomId={this.props.currentRoom} />
          )}
        </div>
      </div>
    );
  }
}

Root.propTypes = {
  currentUser: PropTypes.object,
  currentRoom: PropTypes.string,
  socket: PropTypes.object,
  dispatch: PropTypes.func
};

const mapStateToProps = ({ socket, users, rooms }) => ({
  socket,
  currentUser: users.byId[users.current],
  currentRoom: rooms.current
});

export default connect(mapStateToProps)(Root);
