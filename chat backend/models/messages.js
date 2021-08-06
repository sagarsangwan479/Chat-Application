const mongoose = require("mongoose");
const User = require("../models/user")
const {ObjectId} = mongoose.Schema;

var messageSchema = new mongoose.Schema(
  {
    message: {
      type: String,
    },
    sender:{
      type:ObjectId,
      ref:"User"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("messages", messageSchema);
