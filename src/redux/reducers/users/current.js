import { handleActions } from 'redux-actions';

import { SET_CURRENT_USER } from '../../constants/actions';

const initialState = null;

export default handleActions(
  {
    [SET_CURRENT_USER]: (state, { payload: userId }) => userId
  },
  initialState
);
