import reducer from '../by-id';
import { AUTH_LOGGED_IN } from '../../../constants/actions';

describe('reducers/users/by-id', () => {
  describe('AUTH_LOGGED_IN action', () => {
    it('should add logged in user to state', () => {
      const state = {};
      const testUser = {
        id: 'u1',
        name: '🐕🐕🐕🐕🐕'
      };
      const action = {
        type: AUTH_LOGGED_IN,
        payload: testUser
      };

      const newState = reducer(state, action);

      expect(newState).toEqual({
        [testUser.id]: testUser
      });
    });
  });
});
