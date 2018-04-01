import { handleActions } from 'redux-actions';

import { ADD_USERS } from '../../constants/actions';

const initialState = {};

export default handleActions(
  {
    [ADD_USERS]: (state, { payload: users }) => {
      const newUsers = users.reduce((prev, curr) => {
        prev[curr.id] = curr;
        return prev;
      }, {});
      return {
        ...state,
        ...newUsers
      };
    }
  },
  initialState
);
