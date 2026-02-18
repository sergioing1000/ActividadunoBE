const express = require("express");

function createChatRouter(chatService) {
  const router = express.Router();

  router.post("/messages", (req, res) => {
    const { username, message } = req.body;

    if (!username || !message) {
      return res
        .status(400)
        .json({ error: "username and message are required" });
    }

    try {
      chatService.registerUser(username);
      chatService.sendMessage(username, message);

      return res.status(200).json({
        status: "Message sent successfully",
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });

  return router;
}

module.exports = createChatRouter;
