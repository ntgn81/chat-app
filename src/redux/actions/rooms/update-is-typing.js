import { USER_TYPING } from '../../constants/actions';

export default (roomId, isTyping) => (dispatch, getState) => {
  const { users: { current: userId }, socket } = getState();
  socket.send({
    type: USER_TYPING,
    payload: {
      roomId,
      userId,
      isTyping
    }
  });
};
