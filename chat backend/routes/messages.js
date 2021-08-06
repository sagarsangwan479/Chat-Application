const express = require("express");
const router = express.Router();
const { createChat, getUserById, putMessageInChat, getChatById } = require("../controllers/messages");

router.param("userId", getUserById);
router.param("chatId", getChatById);

router.post("/message/:userId", createChat);
router.put("/message/:chatId", putMessageInChat);

module.exports = router;
