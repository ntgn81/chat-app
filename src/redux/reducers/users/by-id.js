import { handleActions } from 'redux-actions';

import { ADD_USERS } from '../../constants/actions';

const initialState = {};

export default handleActions(
  {
    [ADD_USERS]: (state, { payload: users }) => {
      const newUsers = users.reduce((memo, user) => {
        const currentUser = state[user.id] || {};
        memo[user.id] = {
          ...currentUser,
          ...user
        };
        return memo;
      }, {});
      return {
        ...state,
        ...newUsers
      };
    }
  },
  initialState
);
