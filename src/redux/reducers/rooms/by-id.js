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
      const currentMessageIds = currentRoom.messageIds || [];

      return {
        ...state,
        [message.roomId]: {
          ...currentRoom,
          messageIds: currentMessageIds.includes(message.id)
            ? currentMessageIds
            : [...currentMessageIds, message.id]
        }
      };
    },

    [USER_TYPING]: (state, { payload: { userId, roomId, isTyping } }) => {
      const currentRoom = state[roomId] || {};
      const uniqueSet = new Set(currentRoom.typingUserIds);
      const updatedTypingUserIds = isTyping
        ? uniqueSet.add(userId)
        : uniqueSet.delete(userId);

      return {
        ...state,
        [roomId]: {
          ...currentRoom,
          typingUserIds: [...updatedTypingUserIds]
        }
      };
    }
  },
  initialState
);
