const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/UserDB", { useNewUrlParser: true });
const User=require('../models/User');
module.exports={
    fetchfaculties(req,res){
        User.find(function(err,faculties){
            res.send(faculties);
        })
    }
}