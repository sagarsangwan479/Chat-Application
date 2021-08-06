const mongoose = require("mongoose");
const User = require("./user");
const Messages = require("./messages");

var chatSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    messages: {
      type: Array,
      default: [],
    },
    phone: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Chat", chatSchema);
