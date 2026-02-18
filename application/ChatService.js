class ChatService {
  constructor(mediator, UserClass) {
    this.mediator = mediator;
    this.UserClass = UserClass;
    this.userMap = new Map();
  }

  registerUser(username) {
    if (!this.userMap.has(username)) {
      const user = new this.UserClass(username, this.mediator);
      this.mediator.addUser(user);
      this.userMap.set(username, user);
    }
  }

  sendMessage(username, message) {
    const user = this.userMap.get(username);
    if (!user) {
      throw new Error("User not registered");
    }
    user.send(message);
  }
}

module.exports = ChatService;
