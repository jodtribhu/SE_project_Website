const crypto=require('crypto');
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/UserDB", { useNewUrlParser: true });
const UserSchema=new mongoose.Schema({
    email:{
        type:String,
        unique:[true,"Account is already present"],
        required:[true,"Email has not been entered"]
    },
    salt:{
        type:String
    },
    hash:{
        type:String,
    }
})
module.exports=mongoose.model("User",UserSchema);
