import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// import './chat-typing-user.scss';

class ChatTypingUser extends React.PureComponent {
  render() {
    return (
      <div className="chat-typing-user">
        {this.props.user.name} is typing...
      </div>
    );
  }
}

ChatTypingUser.propTypes = {
  userId: PropTypes.string.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string
  })
};

const mapStateToProps = (state, ownProps) => {
  const user = state.users.byId[ownProps.userId];
  return { user };
};

export default connect(mapStateToProps)(ChatTypingUser);
