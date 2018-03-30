import reducer from '../by-id';
import { NEW_MESSAGE } from '../../../constants/actions';

describe('reducers/messages/by-id', () => {
  describe('NEW_MESSAGE action', () => {
    const testMessage = {
      id: 'msg1',
      roomId: 'room1',
      userId: 'u1',
      content: '🐔🐔🐔🐔🐔'
    };
    const testAction = {
      type: NEW_MESSAGE,
      payload: testMessage
    };

    it('should not mutate the state', () => {
      const state = {};

      const newState = reducer(state, testAction);

      expect(newState).not.toBe(state);
    });

    it('should add new entry into the state', () => {
      const state = {};

      const newState = reducer(state, testAction);

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

      const newState = reducer(state, testAction);

      expect(newState).toEqual({
        [testMessage.id]: testMessage
      });
    });
  });
});
