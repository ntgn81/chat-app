import { handleActions } from 'redux-actions';

import { AUTH_LOGGED_IN } from '../../constants/actions';

const initialState = {};

export default handleActions(
  {
    [AUTH_LOGGED_IN]: (state, { payload: user }) => ({
      ...state,
      [user.id]: user
    })
  },
  initialState
);
