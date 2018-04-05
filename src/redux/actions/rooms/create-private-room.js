import { createAction } from 'redux-actions';
import {
  ADD_ROOMS,
  ADD_USERS,
  SET_CURRENT_ROOM
} from '../../constants/actions';
// import socketActions from '../socket';
import httpService from '../../../services/mock-http';

const setCurrentRoom = createAction(SET_CURRENT_ROOM);
const addRooms = createAction(ADD_ROOMS);
const addUsers = createAction(ADD_USERS);

export default targetUserId => async (dispatch, getState) => {
  const state = getState();
  const currentUserId = state.users.current;

  const response = await httpService.createPrivateRoom(
    currentUserId,
    targetUserId
  );

  dispatch(addRooms([response.room]));
  dispatch(addUsers(response.users));
  dispatch(setCurrentRoom(response.room.id));
  state.socket.send(
    JSON.stringify({
      type: 'JOIN_ROOM',
      payload: {
        userId: currentUserId,
        roomId: response.room.id
      }
    })
  );
};
