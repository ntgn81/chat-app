import { createAction } from 'redux-actions';
import { AUTH_LOGGED_IN } from '../../constants/actions';
import socketActions from '../socket';

const authLoggedIn = createAction(AUTH_LOGGED_IN);
export default user => dispatch => {
  dispatch(authLoggedIn(user));
  dispatch(socketActions.connect(user));
};
