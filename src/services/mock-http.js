// mock-http, replace with http calls using something like axios
const mockData = require('../mock-data');

async function createPrivateRoom(ownUserId, targetUserId) {
  const users = [ownUserId, targetUserId].sort();
  let room = mockData.rooms.find(
    room =>
      room.type === 'private' &&
      room.users[0] === users[0] &&
      room.users[1] === users[1]
  );

  if (!room) {
    room = {
      id: `${users[0]}-${users[1]}`,
      type: 'private',
      users
    };
    mockData[room.id] = room;
  }

  return {
    room,
    users: mockData.users.filter(user => users.includes(user.id))
  };
}

export default { createPrivateRoom };
