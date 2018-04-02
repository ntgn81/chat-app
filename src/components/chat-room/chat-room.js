import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ChatInput from '../chat-input/chat-input';
import ChatMessages from '../chat-messages/chat-messages';
import ChatTypingUsers from '../chat-typing-users/chat-typing-users';

import roomActions from '../../redux/actions/rooms';

import './chat-room.scss';

class ChatRoom extends React.Component {
  onInputSubmit = value => {
    this.props.dispatch(roomActions.submitMessage(this.props.roomId, value));
  };

  onIsTypingChange = isTyping => {
    this.props.dispatch(
      roomActions.updateIsTyping(this.props.roomId, isTyping)
    );
  };

  render() {
    if (!this.props.room) return null;
    return (
      <div className="chat-room">
        <div className="messages-container">
          <ChatMessages
            messagesIds={this.props.room.messageIds}
            userId={this.props.userId}
          />

          <div className="typing-users-container">
            <ChatTypingUsers
              typingUserIds={this.props.room.typingUserIds}
              userId={this.props.userId}
            />
          </div>
        </div>

        <div className="input-container">
          <ChatInput
            onSubmit={this.onInputSubmit}
            onIsTypingChange={this.onIsTypingChange}
          />
        </div>
      </div>
    );
  }
}

ChatRoom.propTypes = {
  userId: PropTypes.string,
  roomId: PropTypes.string,
  room: PropTypes.shape({
    messageIds: PropTypes.arrayOf(PropTypes.string),
    typingUserIds: PropTypes.arrayOf(PropTypes.string)
  }),
  dispatch: PropTypes.func
};

const mapStateToProps = (state, ownProps) => {
  return {
    userId: state.users.current,
    room: state.rooms.byId[ownProps.roomId]
  };
};

export default connect(mapStateToProps)(ChatRoom);
