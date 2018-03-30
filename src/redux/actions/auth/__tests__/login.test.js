import { AUTH_LOGGED_IN } from '../../../constants/actions';
import action from '../login';
import socketActions from '../../socket';

describe('actions/auth/login', () => {
  const user = {};
  let mockDispatch;
  beforeEach(() => {
    mockDispatch = jest.fn();
    socketActions.connect = jest.fn();
    action(user)(mockDispatch);
  });

  it('should dispatch AUTH_LOGGED_IN with the user as payload', () => {
    expect(mockDispatch).toHaveBeenCalledWith({
      type: AUTH_LOGGED_IN,
      payload: user
    });
  });

  it('should dispatch socket connect with the user', () => {
    expect(socketActions.connect).toHaveBeenCalledWith(user);
  });
});
