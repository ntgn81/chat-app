import {
  NEW_MESSAGE,
  JOIN_ROOM,
  USER_TYPING
} from '../redux/constants/actions';

const connections = [];
window.connections = connections;

// most of this logic would move to websocket server for real implementation
class MockWebSocket {
  constructor(userId) {
    this.readyState = 1; // just so it serializes in redux store nicely
    this.onopen = () => {};
    this.onmessage = () => {};

    setTimeout(() => {
      this.onopen();
    }, 5);

    connections.push({ userId, rooms: [], connection: this });
  }

  _forwardToMatchingRooms(type, message) {
    connections.find(conn => {
      if (conn.rooms.includes(message.roomId)) {
        conn.connection.onmessage({
          type,
          payload: message
        });
      }
    });
  }

  _processJoinRoom(userId, roomId) {
    connections.forEach(conn => {
      if (conn.userId === userId && !conn.rooms.includes(roomId)) {
        conn.rooms.push(roomId);
      }
    });
  }

  send({ type, payload }) {
    switch (type) {
      case NEW_MESSAGE:
      case USER_TYPING:
        this._forwardToMatchingRooms(type, payload);
        break;
      case JOIN_ROOM:
        this._processJoinRoom(payload.userId, payload.roomId);
        break;
    }
  }
}

function create(userId) {
  return new MockWebSocket(userId);
}

export default { create };
