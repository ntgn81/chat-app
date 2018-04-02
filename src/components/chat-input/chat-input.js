import React from 'react';
import PropTypes from 'prop-types';

import './chat-input.scss';

class ChatInput extends React.Component {
  _callIsTypingChangeWithFalse = () => {
    this.props.onIsTypingChange(false);
  };

  onKeyUp = e => {
    if (e.keyCode === 13 && e.target.value) {
      if (this.props.onSubmit) {
        this.props.onSubmit(e.target.value);
      }
      e.target.value = '';
      this._callIsTypingChangeWithFalse();
    }
  };

  onChange = e => {
    const value = e.target.value;
    if (value) {
      if (this.timeoutId) clearTimeout(this.timeoutId);
      // OPTIMIZATION: possibly debounce this
      this.props.onIsTypingChange(true);

      this.timeoutId = setTimeout(this._callIsTypingChangeWithFalse, 1500);
    }
  };

  render() {
    return (
      <input
        className="chat-input"
        onKeyUp={this.onKeyUp}
        onChange={this.onChange}
      />
    );
  }
}

ChatInput.propTypes = {
  onSubmit: PropTypes.func
};

export default ChatInput;
