import reducer from '../by-id';
import { ADD_USERS } from '../../../constants/actions';

describe('reducers/users/by-id', () => {
  describe('ADD_USERS action', () => {
    it('should add given users to state', () => {
      const state = {};
      const testUser1 = {
        id: 'u1',
        name: '🐕🐕🐕🐕🐕'
      };
      const testUser2 = {
        id: 'u1',
        name: '🐈🐈🐈🐈🐈'
      };
      const action = {
        type: ADD_USERS,
        payload: [testUser1, testUser2]
      };

      const newState = reducer(state, action);

      expect(newState).toEqual({
        [testUser1.id]: testUser1,
        [testUser2.id]: testUser2
      });
    });
  });
});
