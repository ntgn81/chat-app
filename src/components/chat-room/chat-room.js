import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ChatInput from '../chat-input/chat-input';
import ChatMessage from '../chat-message/chat-message';

import roomActions from '../../redux/actions/rooms';

import './chat-room.scss';

class ChatRoom extends React.Component {
  onInputSubmit = value => {
    this.props.dispatch(roomActions.submitMessage(this.props.roomId, value));
  };

  renderMessages() {
    return (
      this.props.room.messages &&
      this.props.room.messages.map(messageId => (
        <ChatMessage key={messageId} messageId={messageId} />
      ))
    );
  }

  render() {
    return (
      !!this.props.room && (
        <div className="chat-room">
          <div className="messages-container">{this.renderMessages()}</div>

          <div className="typing-users-container" />

          <div className="input-container">
            <ChatInput onSubmit={this.onInputSubmit} />
          </div>
        </div>
      )
    );
  }
}

ChatRoom.propTypes = {
  roomId: PropTypes.string,
  room: PropTypes.shape({
    messages: PropTypes.arrayOf(PropTypes.string)
  }),
  dispatch: PropTypes.func
};

const mapStateToProps = (state, ownProps) => {
  return {
    room: state.rooms.byId[ownProps.roomId]
  };
};

export default connect(mapStateToProps)(ChatRoom);
