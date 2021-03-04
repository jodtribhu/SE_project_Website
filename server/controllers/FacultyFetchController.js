const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/UserDB", { useNewUrlParser: true });
const User=require('../models/User');
module.exports={
    fetchfaculties(req,res){
        User.find(function(err,faculties){
            res.send(faculties);
        })
    },
    deleteFaculty(req,res){
        console.log(req.body);
        User.findByIdAndDelete(req.body.id,function(err){
            if(err){
                console.log(err);
            }
            else
            {
                console.log("Successfully Deleted");
            }
        })
    }
}