import React from 'react';
import PropTypes from 'prop-types';

import './chat-input.scss';

class ChatInput extends React.Component {
  onKeyUp = e => {
    if (e.keyCode === 13 && e.target.value) {
      if (this.props.onSubmit) {
        this.props.onSubmit(e.target.value);
      }
      e.target.value = '';
    }
  };

  render() {
    return <input className="chat-input" onKeyUp={this.onKeyUp} />;
  }
}

ChatInput.propTypes = {
  onSubmit: PropTypes.func
};

export default ChatInput;
