import { createAction } from 'redux-actions';
import { SET_CURRENT_USER, ADD_USERS } from '../../constants/actions';
import socketActions from '../socket';

const setCurrentUser = createAction(SET_CURRENT_USER);
const addUsers = createAction(ADD_USERS);

export default user => dispatch => {
  dispatch(setCurrentUser(user.id));
  dispatch(addUsers([user]));
  dispatch(socketActions.connect(user));
};
