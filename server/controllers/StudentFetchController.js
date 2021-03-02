const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/UserDB", { useNewUrlParser: true });
const Student=require('../models/Student');
module.exports={
    fetchstudents(req,res){
        Student.find(function(err,students){
            res.send(students);
        })
    }
}