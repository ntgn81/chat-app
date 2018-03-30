import { createAction } from 'redux-actions';
import MockWebSocket from './mock-web-socket';
import { SOCKET_CONNECTED, SOCKET_CLOSED } from '../../constants/actions';

const socketConnected = createAction(SOCKET_CONNECTED);
const socketClosed = createAction(SOCKET_CLOSED);

export default () => (dispatch, getState) => {
  const socket = new MockWebSocket();

  socket.onopen = () => {
    dispatch(socketConnected(socket));
  };
  socket.onclose = () => {
    dispatch(socketClosed(socket));
  };
};
