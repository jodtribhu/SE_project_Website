const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/UserDB", { useNewUrlParser: true });
const LinkSchema = new mongoose.Schema({ link: String });
const ProjectSchema = new mongoose.Schema({
     projectName: String ,
     currentlyworking:Boolean,
     startdate:Date,
     enddate:Date,
     contributers:String,
     associated_with:String,
     project_url:String,
     project_description:String
    });
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
        required:[true,"Address has not been entered"]
    },
    City:{
        type:String,
        required:[true,"City has not been entered"]
    },
    Description:{
        type:String,
        required:[true,"Description has not been entered"]
    },
    PhoneNo:{
        type:String,
        required:[true,"Description has not been entered"]
    },
    links:[LinkSchema],
    projects:[ProjectSchema],
    preferences:{
        type:Array
    },
    ProfilePhotoPath:{
        type:String,
    },
    created_at:{
        type:Date
    },
    modified_at:{
        type:Date
    }
})
module.exports=mongoose.model("FacultyProfile",FacultyProfileSchema);
