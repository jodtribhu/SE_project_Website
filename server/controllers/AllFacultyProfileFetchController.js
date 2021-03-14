const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/UserDB", { useNewUrlParser: true });
const FacultyProfile=require('../models/FacultyProfile');
module.exports={
    fetchAllFacultyProfiles(req,res){
        FacultyProfile.find(function(err,allfacultyProfiles){
            res.send(allfacultyProfiles);
        })
    },
}