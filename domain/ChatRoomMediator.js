const ChatMediator = require("./ChatMediator.js");

class ChatRoomMediator extends ChatMediator {
  constructor() {
    super();
    this.users = [];
  }

  addUser(user) {
    this.users.push(user);
  }

  sendMessage(message, sender) {
    this.users.forEach((user) => {
      if (user !== sender) {
        user.receive(message, sender.name);
      }
    });
  }
}

module.exports = ChatRoomMediator;
