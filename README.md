### Demo
https://ntgn81.github.io/chat-app/

### To start local dev server
1. git clone
2. npm install
3. npm start

### Notes
This app currently have 2 <Root /> components, with 2 redux stores, to trully immitate 2 different users logging in.

### Tools/framework used
- `React` for the UI components
- `Redux` for state management
- `Sass` for writing css
- Mock `WebSocket` for communication between users
  - Replaceable with real WebSocket by switching out single file - mock-web-socket.js
- Mock `http` for communication with api for chat room creations
  - Replaceable with calls to real API end point by switching out mock-http.js
- `Webpack 4` for bundling/running dev server
- `CSS Flexbox` for the layout
- `Jest/Enzyme` for unit tests
- `Prettier/ESLint` for automatic code formatting
- `Husky` for precommit checks

### Redux state structure

```json
{
  "rooms": {
    "byId": {
      "laura-rob": {
        "id": "laura-rob",
        "type": "private",
        "users": [
          "u1",
          "u2"
        ],
        "typingUserIds": [
          "u2"
        ],
        "messageIds": [
          "msg1",
          "msg2"
        ]
      }
    },
    "current": "laura-rob"
  },
  "messages": {
    "byId": {
      "msg1": {
        "id": "msg1",
        "userId": "u1",
        "roomId": "laura-rob",
        "content": "Hello, Rob",
        "created": "2018-04-02T17:57:58.205Z"
      },
      "msg2": {
        "id": "msg2",
        "userId": "u2",
        "roomId": "laura-rob",
        "content": "Hello Laura",
        "created": "2018-04-02T17:58:01.644Z"
      }
    }
  },
  "socket": {
    "readyState": 1
  },
  "users": {
    "byId": {
      "u1": {
        "id": "u1",
        "name": "Laura"
      },
      "u2": {
        "id": "u2",
        "name": "Rob"
      }
    },
    "current": "u1"
  }
}
```

### Things to improve on

- 100% code coverage
- Prettier UI
- Real WebSocket server - if Node.js, using uWebSockets
- Real http server - Express/Koa...
