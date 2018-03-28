import messagesReducer from '../messages';
import { NEW_MESSAGE } from '../../constants/actions';

describe('reducers/messages', () => {
  describe('NEW_MESSAGE action', () => {
    const testMessage = {
      id: 99,
      content: '🐔🐔🐔🐔🐔'
    };
    const testAction = {
      type: NEW_MESSAGE,
      payload: {
        roomId: 11,
        message: testMessage
      }
    };

    it('should not mutate the state', () => {
      const state = {};

      const newState = messagesReducer(state, testAction);

      expect(newState).not.toBe(state);
    });

    it('should add new entry into the state', () => {
      const state = {};

      const newState = messagesReducer(state, testAction);

      expect(newState).toEqual({
        [testMessage.id]: testMessage
      });
    });

    it('should update existing entry in the state', () => {
      const state = {
        [testMessage.id]: {
          ...testMessage,
          content: 'different content'
        }
      };

      const newState = messagesReducer(state, testAction);

      expect(newState).toEqual({
        [testMessage.id]: testMessage
      });
    });
  });
});
