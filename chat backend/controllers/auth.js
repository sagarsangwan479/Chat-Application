const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");
const { body, validationResult } = require("express-validator");
const User = require("../models/user");
const speakEasy = require("speakeasy");



exports.genOTP = (req, res, next) => {
  var secret = speakEasy.generateSecret({ length: 20 });

  var token = speakEasy.totp({
    secret: secret.base32,
    encoding: "base32",
  });
  res.json({
    secret: secret.base32,
    token: token,
    remaining: 30 - Math.floor((new Date().getTime() / 1000) % 30),
  });
};

exports.verifyOTP = (req,res) => {
    var tokenValidates = speakEasy.totp.verify({
        secret: req.body.secret,
        encoding: 'base32',
        token: req.body.token,
        window: 6
      });

      res.json({
          result: tokenValidates
      })
}

exports.signup = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }

  const user = new User(req.body);
  user.save((err,user) => {
    if(err){
      return res.status(400).json({
        error: "user not saved in database"
      })
    }

    res.json({
      user:user
    })
  })
};

exports.signin = (req, res) => {
  const errors = validationResult(req);
  const { phone } = req.body;

  if (!errors.isEmpty()) {
    return res.status(400).json({
      error: errors.array()[0].msg,
    });
  }

  User.findOne({ phone }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "phone number doesn't exist",
      });
    }
    var token = jwt.sign({ _id: user._id }, process.env.SECRET);
    res.cookie("token", token, { expire: new Date() + 9999 });

    const { name, email, phone, _id } = user;
    return res.json({ token, user: {_id, name, email, phone } });
  });
};

exports.signout = (req, res) => {
  res.clearCookie("token");
  res.json({
    message: "signed out successfully",
  });
};

exports.isSignedIn = expressJwt({
  secret: process.env.SECRET,
  userProperty: "auth",
  algorithms: ["RS256"],
});
