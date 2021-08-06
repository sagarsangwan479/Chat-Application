const User = require("../models/user");
const messages = require("../models/messages");
const Chat = require("../models/chat");

exports.getUserById = (req, res, next, id) => {
  User.findById(id).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "no user found in database",
      });
    }
    req.profile = user;
    next();
  });
};

exports.getChatById = (req, res, next, id) => {
  Chat.findById(id).exec((err, chat) => {
    if (err || !chat) {
      return res.status(400).json({
        error: "no chat found in database",
      });
    }
    req.chat = chat;
    next();
  });
};



exports.createChat = (req, res, next) => {
  const name = req.profile.name || req.profile.phone
    const chat = Chat({
      name:name,
      phone:req.profile.phone
    });
    chat.save((err,chat) => {
      if(err){
        return res.status(400).json({
          error:"error occured"
        })
      }
    })
    res.json({
      message:"chat created"
    })
    next();
  
};



exports.putMessageInChat = (req,res) => {
  const msg = new messages(req.body);
  msg.save((err,msg) => {
    if(err){
      return res.status(400).json({
        error:"error occured"
      })
    }
  })
    Chat.findOneAndUpdate(
      {_id:req.params.chatId},
      {$push:{messages:msg}},
      {new:true},
      (err,chat)=> {
        if(err){
          return res.json({
            error:"not saved"
          })
        }
        res.json({
          chat:chat
        })
      }
    )
  
}