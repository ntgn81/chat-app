import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './chat-message.scss';

export class ChatMessage extends React.PureComponent {
  render() {
    return (
      <div className="chat-message">
        <div className="chat-message-user">{this.props.user.name}</div>
        <div className="chat-message-content">{this.props.message.content}</div>
        <div className="chat-message-time">
          {new Date(this.props.message.created).toLocaleString()}
        </div>
      </div>
    );
  }
}

ChatMessage.propTypes = {
  messageId: PropTypes.string,
  message: PropTypes.shape({
    content: PropTypes.string,
    created: PropTypes.string
  }),
  user: PropTypes.shape({
    name: PropTypes.string
  })
};

const mapStateToProps = (state, ownProps) => {
  const message = state.messages.byId[ownProps.messageId];
  const user = state.users.byId[message.userId];
  return { message, user };
};

export default connect(mapStateToProps)(ChatMessage);
