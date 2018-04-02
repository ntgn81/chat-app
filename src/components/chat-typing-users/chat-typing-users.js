import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// import './chat-messages.scss';

class ChatTypingUsers extends React.PureComponent {
  render() {
    if (!this.props.typingUsers || !this.props.typingUsers.length) {
      return null;
    }

    const usersWithoutSelf = this.props.typingUsers.filter(
      user => user.id !== this.props.userId
    );

    if (!usersWithoutSelf.length) {
      return null;
    }

    return (
      <div className="chat-typing-users">
        {usersWithoutSelf.map(user => user.name).join(', ')}&nbsp;
        {this.props.typingUserIds.length > 1 ? 'are' : 'is'}&nbsp;
        {'typing...'}
      </div>
    );
  }
}

ChatTypingUsers.propTypes = {
  typingUserIds: PropTypes.arrayOf(PropTypes.string),
  typingUsers: PropTypes.arrayOf(PropTypes.object),
  userId: PropTypes.string
};

const mapStateToProps = (state, ownProps) => {
  const typingUserIds = ownProps.typingUserIds || [];
  return {
    typingUsers: typingUserIds.map(userId => state.users.byId[userId])
  };
};

export default connect(mapStateToProps)(ChatTypingUsers);
