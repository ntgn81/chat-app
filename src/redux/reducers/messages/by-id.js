import { handleActions } from 'redux-actions';

import { NEW_MESSAGE } from '../../constants/actions';

const initialState = {};

export default handleActions(
  {
    [NEW_MESSAGE]: (state, { payload: message }) => {
      const currentMessage = state[message.id] || {};

      return {
        ...state,
        [message.id]: {
          ...currentMessage,
          ...message
        }
      };
    }
  },
  initialState
);
