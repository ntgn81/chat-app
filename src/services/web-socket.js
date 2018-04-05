function create(userId) {
  return new WebSocket(`ws://localhost:3000/${userId}`);
}

export default { create };
