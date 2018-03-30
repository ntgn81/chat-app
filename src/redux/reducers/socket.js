import { handleActions } from 'redux-actions';

import { SOCKET_CONNECTED, SOCKET_CLOSED } from '../constants/actions';

const initialState = null;

export default handleActions(
  {
    [SOCKET_CONNECTED]: (state, { payload: socket }) => socket,
    [SOCKET_CLOSED]: () => {}
  },
  initialState
);
