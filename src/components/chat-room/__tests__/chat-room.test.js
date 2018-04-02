jest.mock('../../../redux/actions/rooms');

import React from 'react';
import { shallow } from 'enzyme';
import { ChatRoom } from '../chat-room';

import ChatInput from '../../chat-input/chat-input';
import ChatMessages from '../../chat-messages/chat-messages';
import ChatTypingUsers from '../../chat-typing-users/chat-typing-users';
import roomActions from '../../../redux/actions/rooms';

describe('components/chat-message/chat-message', () => {
  let chatRoom;
  let props;
  beforeEach(() => {
    props = {
      userId: 'u1',
      roomId: 'r1',
      room: {
        messageIds: ['m1', 'm2', 'm3'],
        typingUserIds: ['u1', 'u2', 'u3']
      },
      dispatch: jest.fn()
    };
    chatRoom = shallow(<ChatRoom {...props} />);
  });

  it('should render ChatMessages component with correct props', () => {
    const chatMessages = chatRoom.find(ChatMessages);
    expect(chatMessages.props()).toEqual({
      userId: props.userId,
      messageIds: props.room.messageIds
    });
  });

  it('should render ChatTypingUsers component with correct props', () => {
    const chatTypingUsers = chatRoom.find(ChatTypingUsers);
    expect(chatTypingUsers.props()).toEqual({
      userId: props.userId,
      typingUserIds: props.room.typingUserIds
    });
  });

  it('should render ChatInput component', () => {
    const chatInput = chatRoom.find(ChatInput);
    expect(chatInput).toHaveLength(1);
  });

  it('should dispatch rooms.submitMessage action when ChatInput calls onInputSubmit', () => {
    const chatInput = chatRoom.find(ChatInput);
    const value = 'something cool';

    chatInput.simulate('submit', value);

    expect(props.dispatch).toHaveBeenCalled();
    expect(roomActions.submitMessage).toHaveBeenCalledWith(props.roomId, value);
  });

  it('should dispatch rooms.updateIsTyping action when ChatInput calls onIsTypingChange', () => {
    const chatInput = chatRoom.find(ChatInput);
    const isTyping = true;

    chatInput.simulate('isTypingChange', isTyping);

    expect(props.dispatch).toHaveBeenCalled();
    expect(roomActions.updateIsTyping).toHaveBeenCalledWith(props.roomId, true);
  });
});
