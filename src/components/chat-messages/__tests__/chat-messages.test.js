import React from 'react';
import { shallow } from 'enzyme';
import ChatMessages from '../chat-messages';
import ChatMessage from '../chat-message';

describe('components/chat-message/chat-message', () => {
  let chatMessages;
  let props;
  beforeEach(() => {
    props = {
      messageIds: ['m1', 'm2', 'm3'],
      userId: 'u1'
    };
    chatMessages = shallow(<ChatMessages {...props} />);
  });

  it('should render nothing if no messageIds given', () => {
    chatMessages = shallow(<ChatMessages />);
    expect(chatMessages.getElement()).toBeNull();
  });

  it('should render user correct number of ChatMessage components', () => {
    expect(chatMessages.find(ChatMessage)).toHaveLength(
      props.messageIds.length
    );
  });

  it('should render ChatMessage components with correct props', () => {
    const chatMessageProps = chatMessages
      .find(ChatMessage)
      .map(el => el.props());
    expect(chatMessageProps).toEqual([
      { messageId: props.messageIds[0] },
      { messageId: props.messageIds[1] },
      { messageId: props.messageIds[2] }
    ]);
  });
});
