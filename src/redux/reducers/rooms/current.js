import { handleActions } from 'redux-actions';

import { SET_CURRENT_ROOM } from '../../constants/actions';

const initialState = null;

export default handleActions(
  {
    [SET_CURRENT_ROOM]: (state, { payload: roomId }) => roomId
  },
  initialState
);
