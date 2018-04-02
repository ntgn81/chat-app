jest.mock('../../../redux/actions/rooms');

import React from 'react';
import { shallow } from 'enzyme';
import { ChatTypingUsers } from '../chat-typing-users';

describe('components/chat-message/chat-message', () => {
  let chatTypingUsers;
  let props;
  beforeEach(() => {
    props = {
      typingUsers: [
        { id: 'u1', name: 'User 1' },
        { id: 'u2', name: 'User 2' },
        { id: 'u3', name: 'User 3' }
      ],
      userId: 'u1'
    };
    chatTypingUsers = shallow(<ChatTypingUsers {...props} />);
  });

  it('should render nothing if props.typingUsers is null', () => {
    chatTypingUsers = shallow(<ChatTypingUsers />);
    expect(chatTypingUsers.getElement()).toBeNull();
  });

  it('should render nothing if props.typingUsers is an empty array', () => {
    chatTypingUsers = shallow(<ChatTypingUsers {...props} typingUsers={[]} />);
    expect(chatTypingUsers.getElement()).toBeNull();
  });

  it('should render nothing if props.typingUsers has single element that is active user', () => {
    const typingUsers = [{ id: props.userId }];
    chatTypingUsers = shallow(
      <ChatTypingUsers {...props} typingUsers={typingUsers} />
    );
    expect(chatTypingUsers.getElement()).toBeNull();
  });

  it('should render correct text for plural', () => {
    expect(chatTypingUsers.text().trim()).toBe('User 2, User 3 are typing...');
  });

  it('should render correct text for singular', () => {
    const typingUsers = props.typingUsers.slice(2);
    chatTypingUsers = shallow(
      <ChatTypingUsers {...props} typingUsers={typingUsers} />
    );
    expect(chatTypingUsers.text().trim()).toBe('User 3 is typing...');
  });
});
