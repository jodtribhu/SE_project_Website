const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/UserDB", { useNewUrlParser: true });
const Student=require('../models/Student');
module.exports={
    fetchstudents(req,res){
        Student.find(function(err,students){
            res.send(students);
        })
    },
    deletestudent(req,res){
        console.log(req.body);
        Student.remove({ studentRollNo: req.body.rollno },function(err){
            console.log("Inside");
            if(err){
                console.log(err);
                res.send(err)
            }
            else
            {
                res.send("Successfully Deleted")
                console.log("Successfully Deleted");
            }
        })
    }
}