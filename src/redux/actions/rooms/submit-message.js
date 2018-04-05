import uuid from 'uuid';
import { createAction } from 'redux-actions';
import { NEW_MESSAGE } from '../../constants/actions';

const newMessage = createAction(NEW_MESSAGE);

export default (roomId, content) => (dispatch, getState) => {
  const state = getState();
  const socket = state.socket;
  const message = {
    id: uuid.v4(),
    userId: state.users.current,
    roomId,
    content,
    created: new Date().toISOString()
  };
  socket.send(
    JSON.stringify({
      type: NEW_MESSAGE,
      payload: message
    })
  );
  dispatch(newMessage(message));
};
