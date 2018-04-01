import { handleActions } from 'redux-actions';

import { NEW_MESSAGE, USER_TYPING, ADD_ROOMS } from '../../constants/actions';

const initialState = {};

export default handleActions(
  {
    [ADD_ROOMS]: (state, { payload: rooms }) => {
      const newRooms = rooms.reduce((memo, room) => {
        const currentRoom = state[room.id] || {};
        memo[room.id] = {
          ...currentRoom,
          ...room
        };
        return memo;
      }, {});
      return {
        ...state,
        ...newRooms
      };
    },

    [NEW_MESSAGE]: (state, { payload: message }) => {
      const currentRoom = state[message.roomId] || {};
      const currentMessages = currentRoom.messages || [];

      return {
        ...state,
        [message.roomId]: {
          ...currentRoom,
          messages: currentMessages.includes(message.id)
            ? currentMessages
            : [...currentMessages, message.id]
        }
      };
    },

    [USER_TYPING]: (state, { payload: { userId, roomId, isTyping } }) => {
      const currentRoom = state[roomId] || {};
      const uniqueSet = new Set(currentRoom.typingUsers);
      const updatedTypingUsers = isTyping
        ? uniqueSet.add(userId)
        : uniqueSet.delete(userId);

      return {
        ...state,
        [roomId]: {
          ...currentRoom,
          typingUsers: [...updatedTypingUsers]
        }
      };
    }
  },
  initialState
);
