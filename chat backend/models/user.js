const mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    name: {
        type: String,
        maxLength:32,
        trim:true
    },
    email:{
        type:String,
        maxLength:32,
        trim:true,
        unique:true
    },
    phone:{
        type:Number,
        maxLength:12,
        required:true,
        trim:true,
        unique:true
    }
},
    {
        timestamps:true
    })  

module.exports = mongoose.model("User",userSchema);