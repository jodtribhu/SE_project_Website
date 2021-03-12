const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/UserDB", { useNewUrlParser: true });
const FacultyProfile=require('../models/FacultyProfile');
module.exports={
    fetchEachFacultyProfile(req,res){
        FacultyProfile.find(function(err,facultyProfile){
            res.send(facultyProfile);
        })
    },
}