import React from 'react';
import PropTypes from 'prop-types';
import ChatMessage from './chat-message';

import './chat-messages.scss';

const isScrollAtBottom = el =>
  el.scrollHeight - el.scrollTop === el.clientHeight;

const scrollToBottom = el => (el.scrollTop = el.scrollHeight);

class ChatMessages extends React.PureComponent {
  constructor(props) {
    super(props);
    this.isScrollAtBottom = true;
  }

  componentDidUpdate() {
    if (this.isScrollAtBottom) {
      scrollToBottom(this.elRef);
    }
  }

  onScroll = e => {
    this.isScrollAtBottom = isScrollAtBottom(this.elRef);
  };

  assignRef = el => {
    this.elRef = el;
  };

  render() {
    if (!this.props.messages) return null;
    return (
      <div
        className="chat-messages"
        ref={this.assignRef}
        onScroll={this.onScroll}>
        {this.props.messages.map(messageId => (
          <ChatMessage key={messageId} messageId={messageId} />
        ))}
      </div>
    );
  }
}

ChatMessages.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.string),
  userId: PropTypes.string
};

export default ChatMessages;
