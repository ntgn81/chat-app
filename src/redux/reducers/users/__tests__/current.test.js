import reducer from '../current';
import { AUTH_LOGGED_IN } from '../../../constants/actions';

describe('reducers/users/current', () => {
  describe('AUTH_LOGGED_IN action', () => {
    const testUser = {
      id: 'u1',
      name: '🐕🐕🐕🐕🐕'
    };

    it('should set state as logged in user id', () => {
      const action = {
        type: AUTH_LOGGED_IN,
        payload: testUser
      };
      const newState = reducer(null, action);

      expect(newState).toBe(testUser.id);
    });
  });
});
