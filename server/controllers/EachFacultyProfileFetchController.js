const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/UserDB", { useNewUrlParser: true });
const FacultyProfile=require('../models/FacultyProfile');
module.exports={
    fetchEachFacultyProfile(req,res){
        FacultyProfile.findOne({_id:req.body.id}, function(err, facultyProfile){
            if (err){
                console.log("errr",err);
            }else{
                
                res.send(facultyProfile);
            }
        })

    },
    addFacultyBasicDetails(req,res){
        
        const facultyprofile=new FacultyProfile({_id:req.body.id,
            FirstName:req.body.fname,
            LastName:req.body.lname, 
            Address:req.body.address,
            City:req.body.city,
            PhoneNo:req.body.phoneNo,
            Description:req.body.description,
            created_at:new Date(),
            modified_at:new Date()});
        facultyprofile.save().then((facultyprofile) => {
            res.send({registration:"Successfull"}); 
        })
        .catch((error) => {
            console.log(error);
            res.send(400, "Bad Request");
        });
    },
}