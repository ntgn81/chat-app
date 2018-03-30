export default class MockWebSocket {
  constructor(url) {
    this.readyState = 1; // just so it serializes in redux store nicely
    this.onopen = () => {};
    this.onmessage = () => {};

    setTimeout(() => {
      this.onopen();
    }, 5);
  }

  send(message) {
    this.onmessage(message);
  }
}
