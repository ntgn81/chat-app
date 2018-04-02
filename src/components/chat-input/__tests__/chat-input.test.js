import React from 'react';
import { shallow } from 'enzyme';
import ChatInput from '../chat-input';

describe('components/chat-input/chat-input', () => {
  let chatInput;
  let props;
  beforeEach(() => {
    props = {
      onIsTypingChange: jest.fn(),
      onSubmit: jest.fn()
    };
    const wrapper = shallow(<ChatInput {...props} />);
    chatInput = wrapper.find('input');
  });

  it('should render an input component', () => {
    expect(chatInput).toHaveLength(1);
  });

  describe('when a key is clicked', () => {
    it('should call onSubmit if Enter is clicked and  content is not empty', () => {
      const value = 'test value';
      chatInput.simulate('keyUp', {
        keyCode: 13,
        target: { value }
      });
      expect(props.onSubmit).toHaveBeenCalledWith(value);
    });

    it('should not call onSubmit if Enter is clicked and content is empty', () => {
      const value = undefined;
      chatInput.simulate('keyUp', {
        keyCode: 13,
        target: { value }
      });
      expect(props.onSubmit).not.toHaveBeenCalled();
    });

    it('should not call onSubmit if clicked key is not enter', () => {
      chatInput.simulate('keyUp', {
        keyCode: 14,
        target: {}
      });
      expect(props.onSubmit).not.toHaveBeenCalled();
    });
  });

  describe('when change is triggered', () => {
    it('should not call onIsTypingChange if content is empty', () => {
      const value = undefined;
      chatInput.simulate('change', { target: { value } });
      expect(props.onIsTypingChange).not.toHaveBeenCalled();
    });

    it('should call onIsTypingChange(true) if content is not empty', () => {
      const value = '🍉🍉🍉🍉🍉';
      chatInput.simulate('change', { target: { value } });
      expect(props.onIsTypingChange).toHaveBeenCalledWith(true);
    });

    it('should call onIsTypingChange(false) 1.5s after inactivity', () => {
      const value = '🍉🍉🍉🍉🍉';

      chatInput.simulate('change', { target: { value } });
      chatInput.simulate('change', { target: { value } });

      jest.runAllTimers();

      expect(props.onIsTypingChange).toHaveBeenCalledWith(false);
    });
  });
});
