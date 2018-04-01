import { createAction } from 'redux-actions';
import webSocket from '../../../services/mock-web-socket';
import { SOCKET_CONNECTED, SOCKET_CLOSED } from '../../constants/actions';

const socketConnected = createAction(SOCKET_CONNECTED);
const socketClosed = createAction(SOCKET_CLOSED);

export default userId => dispatch => {
  const socket = webSocket.create();

  socket.onopen = () => {
    dispatch(socketConnected(socket));
  };
  socket.onclose = () => {
    dispatch(socketClosed(socket));
  };
};
