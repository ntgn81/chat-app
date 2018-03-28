import roomsReducer from '../rooms';
import { NEW_MESSAGE, USER_TYPING } from '../../constants/actions';

describe('reducers/rooms', () => {
  describe('NEW_MESSAGE action', () => {
    const testMessage = {
      id: 99,
      content: '🐔🐔🐔🐔🐔'
    };
    const roomId = 11;
    const testAction = {
      type: NEW_MESSAGE,
      payload: {
        roomId,
        message: testMessage
      }
    };

    it('should not mutate the state', () => {
      const state = {};

      const newState = roomsReducer(state, testAction);

      expect(newState).not.toBe(state);
    });

    it('should add new entry into the state', () => {
      const state = {};

      let newState = roomsReducer(state, testAction);
      newState = roomsReducer(newState, testAction);

      expect(newState).toEqual({
        [roomId]: {
          messages: [testMessage.id]
        }
      });
    });

    it('should not add duplicate message', () => {
      const state = {};

      const newState = roomsReducer(state, testAction);

      expect(newState).toEqual({
        [roomId]: {
          messages: [testMessage.id]
        }
      });
    });

    it('should add second message', () => {
      const state = {};
      const secondMessage = {
        id: 100
      };
      const secondPayload = {
        roomId,
        message: secondMessage
      };

      let newState = roomsReducer(state, testAction);
      newState = roomsReducer(newState, {
        type: NEW_MESSAGE,
        payload: secondPayload
      });

      expect(newState).toEqual({
        [roomId]: {
          messages: [testMessage.id, secondMessage.id]
        }
      });
    });
  });

  describe('USER_TYPING action', () => {
    const roomId = 33;
    const userId = 22;
    const testPayload = {
      userId,
      roomId,
      isTyping: true
    };

    it('should not mutate the state', () => {
      const state = {};

      const newState = roomsReducer(state, {
        type: USER_TYPING,
        payload: testPayload
      });

      expect(newState).not.toBe(state);
    });

    it('should add userId to typingUsers list', () => {
      const state = {};

      const newState = roomsReducer(state, {
        type: USER_TYPING,
        payload: testPayload
      });

      expect(newState).toEqual({
        [roomId]: {
          typingUsers: [userId]
        }
      });
    });

    it('should not add duplicate userId to typingUsers list', () => {
      const state = {};

      let newState = roomsReducer(state, {
        type: USER_TYPING,
        payload: testPayload
      });
      newState = roomsReducer(newState, {
        type: USER_TYPING,
        payload: testPayload
      });

      expect(newState).toEqual({
        [roomId]: {
          typingUsers: [userId]
        }
      });
    });

    it('should remove userId from typingUsers list', () => {
      const state = {};

      let newState = roomsReducer(state, {
        type: USER_TYPING,
        payload: testPayload
      });
      newState = roomsReducer(newState, {
        type: USER_TYPING,
        payload: {
          ...testPayload,
          isTyping: false
        }
      });

      expect(newState).toEqual({
        [roomId]: {
          typingUsers: []
        }
      });
    });
  });
});
