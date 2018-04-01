import reducer from '../current';
import { SET_CURRENT_USER } from '../../../constants/actions';

describe('reducers/users/current', () => {
  describe('SET_CURRENT_USER action', () => {
    const testUserId = 'u1';

    it('should set state as logged in user id', () => {
      const action = {
        type: SET_CURRENT_USER,
        payload: testUserId
      };
      const newState = reducer(null, action);

      expect(newState).toBe(testUserId);
    });
  });
});
