const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/UserDB", { useNewUrlParser: true });
const ForgetRequest=require('../models/ForgetRequest');
module.exports={
    // fetchfaculties(req,res){
    //     User.find(function(err,faculties){
    //         res.send(faculties);
    //     })
    // },
    newForgetRequest(req,res){
        const faculty_email= req.body.faculty_email;
        const faculty_description=req.body.faculty_description;
    
    const forgetrequest=new ForgetRequest({email:faculty_email,Description:faculty_description,created_at:new Date()});
    forgetrequest.save().then((forgetrequest) => {
        res.send({registration:"Successfull"}); 
    })
    .catch((error) => {
        console.log(error);
        res.send(400, "Bad Request");
    });
    },
    fetchforgetrequests(req,res){
        ForgetRequest.find(function(err,forgetrequests){
            res.send(forgetrequests);
        })
    },
    deleteforgetrequests(req,res){
         console.log(req.body.id);
        ForgetRequest.findByIdAndDelete(req.body.id,function(err){
            if(err){
                console.log(err);
                res.send(err)
            }
            else
            {
                res.send("successful")
                console.log("Successfully Deleted");
            }
        })
    },
  
}