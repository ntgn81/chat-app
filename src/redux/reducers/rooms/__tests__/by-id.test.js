import reducer from '../by-id';
import { NEW_MESSAGE, USER_TYPING } from '../../../constants/actions';

describe('reducers/rooms/by-id', () => {
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

    // const testMessage = {
    //   id: 99,
    //   content: '🐔🐔🐔🐔🐔'
    // };
    // const roomId = 11;
    // const testAction = {
    //   type: NEW_MESSAGE,
    //   payload: {
    //     roomId,
    //     message: testMessage
    //   }
    // };

    it('should not mutate the state', () => {
      const state = {};

      const newState = reducer(state, testAction);

      expect(newState).not.toBe(state);
    });

    it('should add new entry into the state', () => {
      const state = {};

      let newState = reducer(state, testAction);
      newState = reducer(newState, testAction);

      expect(newState).toEqual({
        [testMessage.roomId]: {
          messages: [testMessage.id]
        }
      });
    });

    it('should not add duplicate message', () => {
      const state = {};

      let newState = reducer(state, testAction);
      newState = reducer(newState, testAction);

      expect(newState).toEqual({
        [testMessage.roomId]: {
          messages: [testMessage.id]
        }
      });
    });

    it('should add second message', () => {
      const state = {};

      const secondMessage = {
        id: 'msg2',
        roomId: 'room1',
        userId: 'u1',
        content: '🐔🐔🐔🐔🐔'
      };
      const secondAction = {
        type: NEW_MESSAGE,
        payload: secondMessage
      };

      let newState = reducer(state, testAction);
      newState = reducer(newState, secondAction);

      expect(newState).toEqual({
        [testMessage.roomId]: {
          messages: [testMessage.id, secondMessage.id]
        }
      });
    });
  });

  describe('USER_TYPING action', () => {
    const roomId = 'r1';
    const userId = 'u1';
    const testPayload = {
      userId,
      roomId,
      isTyping: true
    };

    it('should not mutate the state', () => {
      const state = {};

      const newState = reducer(state, {
        type: USER_TYPING,
        payload: testPayload
      });

      expect(newState).not.toBe(state);
    });

    it('should add userId to typingUsers list', () => {
      const state = {};

      const newState = reducer(state, {
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

      let newState = reducer(state, {
        type: USER_TYPING,
        payload: testPayload
      });
      newState = reducer(newState, {
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

      let newState = reducer(state, {
        type: USER_TYPING,
        payload: testPayload
      });
      newState = reducer(newState, {
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
