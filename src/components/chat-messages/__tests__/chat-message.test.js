import React from 'react';
import { shallow } from 'enzyme';
import { ChatMessage } from '../chat-message';

describe('components/chat-message/chat-message', () => {
  let chatMessage;
  let props;
  beforeEach(() => {
    props = {
      user: {
        name: 'the name'
      },
      message: {
        content: 'the message',
        created: '2018-04-01T16:38:23.217Z'
      }
    };
    chatMessage = shallow(<ChatMessage {...props} />);
  });

  it('should render user name', () => {
    expect(chatMessage.find('.chat-message-user').text()).toBe(props.user.name);
  });

  it('should render message content', () => {
    expect(chatMessage.find('.chat-message-content').text()).toBe(
      props.message.content
    );
  });

  it('should render message content', () => {
    expect(chatMessage.find('.chat-message-time').text()).toBe(
      new Date('2018-04-01T16:38:23.217Z').toLocaleString()
    );
  });
});
