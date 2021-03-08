const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/UserDB", { useNewUrlParser: true });
const ForgetRequestSchema=new mongoose.Schema({
    email:{
        type:String,
        required:[true,"Email has not been entered"]
    },
    Description:{
        type:String,
        required:[true,"Description has not been entered"]
    },
    created_at:{
        type:Date
    },
})
module.exports=mongoose.model("ForgetRequest",ForgetRequestSchema);
