import { createAction } from 'redux-actions';
import webSocket from '../../../services/mock-web-socket';
import {
  SOCKET_CONNECTED,
  SOCKET_CLOSED,
  NEW_MESSAGE,
  USER_TYPING
} from '../../constants/actions';

const socketConnected = createAction(SOCKET_CONNECTED);
const socketClosed = createAction(SOCKET_CLOSED);
const newMessage = createAction(NEW_MESSAGE);
const userTyping = createAction(USER_TYPING);

export default userId => dispatch => {
  const socket = webSocket.create(userId);

  socket.onopen = () => {
    dispatch(socketConnected(socket));
  };
  socket.onclose = () => {
    dispatch(socketClosed(socket));
  };

  socket.onmessage = ({ type, payload }) => {
    switch (type) {
      case NEW_MESSAGE:
        dispatch(newMessage(payload));
        break;
      case USER_TYPING:
        dispatch(userTyping(payload));
        break;
    }
  };
};
