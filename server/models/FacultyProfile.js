const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/UserDB", { useNewUrlParser: true });
const FacultyProfileSchema=new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
    },
    FirstName:{
        type:String,
        required:[true,"FirstName has not been entered"]
    },
    LastName:{
        type:String,
        required:[true,"LastName has not been entered"]
    },
    Address:{
        type:String,
        required:[true,"LastName has not been entered"]
    },
    created_at:{
        type:Date
    },
    modified_at:{
        type:Date
    }
})
module.exports=mongoose.model("FacultyProfile",FacultyProfileSchema);
