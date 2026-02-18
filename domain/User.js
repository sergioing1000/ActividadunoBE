class User {
  constructor(name, mediator) {
    this.name = name;
    this.mediator = mediator;
  }

  send(message) {
    this.mediator.sendMessage(message, this);
  }

  receive(message, senderName) {
    console.log(`[${senderName} → ${this.name}]: ${message}`);
  }
}

module.exports = User;
