import reducer from '../current';
import { SET_CURRENT_ROOM } from '../../../constants/actions';

describe('reducers/rooms/current', () => {
  describe('SET_CURRENT_ROOM action', () => {
    const roomId = 'u1';

    it('should set state as the passed in room id correctly', () => {
      const action = {
        type: SET_CURRENT_ROOM,
        payload: roomId
      };
      const newState = reducer(null, action);

      expect(newState).toBe(roomId);
    });
  });
});
