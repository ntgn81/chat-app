import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ChatInput from '../chat-input/chat-input';
import ChatMessage from '../chat-message/chat-message';
import ChatTypingUser from '../chat-typing-user/chat-typing-user';

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

  renderMessages() {
    return (
      this.props.room.messages &&
      this.props.room.messages.map(messageId => (
        <ChatMessage key={messageId} messageId={messageId} />
      ))
    );
  }

  renderTypingUsers() {
    return (
      this.props.room.typingUsers &&
      this.props.room.typingUsers.map(
        userId =>
          this.props.userId !== userId && (
            <ChatTypingUser key={userId} userId={userId} />
          )
      )
    );
  }

  render() {
    return (
      !!this.props.room && (
        <div className="chat-room">
          <div className="messages-container">{this.renderMessages()}</div>

          <div className="typing-users-container">
            <div className="scroll">{this.renderTypingUsers()}</div>
          </div>

          <div className="input-container">
            <ChatInput
              onSubmit={this.onInputSubmit}
              onIsTypingChange={this.onIsTypingChange}
            />
          </div>
        </div>
      )
    );
  }
}

ChatRoom.propTypes = {
  userId: PropTypes.string,
  roomId: PropTypes.string,
  room: PropTypes.shape({
    messages: PropTypes.arrayOf(PropTypes.string),
    typingUsers: PropTypes.arrayOf(PropTypes.string)
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
