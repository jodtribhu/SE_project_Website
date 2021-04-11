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
    addFacultyLinks(req,res){
        var link = { link:req.body.link };
        FacultyProfile.findOneAndUpdate({ _id: req.body.id },{ $push: { links: link  } },function (error, success) {
            if (error) {
            console.log(error);
            } else {
            res.send({message:"success"})
        }
    });
    },
    addFacultyProject(req,res){
        var project = { projectName:req.body.projectName,
            currentlyworking:req.body.currentlyworking,
            startdate:req.body.startdate,
            enddate:req.body.enddate,
            contributers:req.body.contributers,
            associated_with:req.body.associated_with,
            project_url:req.body.project_url,
            project_description:req.body.project_description
         };
        FacultyProfile.findOneAndUpdate({ _id: req.body.id },{ $push: { projects: project} },function (error, success) {
            if (error) {
            console.log(error);
            } else {
            res.send({message:"success"})
        }
    });
    },
    addFacultyPreferences(req,res){
        var preferencelist = req.body.preference;
        console.log(preferencelist);
        console.log(req.body.id );
        FacultyProfile.findOneAndUpdate({ _id: req.body.id },{'preferences': req.body.preference},function (error, success) {
            if (error) {
            console.log(error);
            } else {
            res.send({message:"success"})
        }
    });
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

    addFacultyProfilePhoto(req,res){
     console.log(req.body.id);
      console.log(req.file.path);
      FacultyProfile.findOneAndUpdate({ _id: req.body.id },{ProfilePhotoPath:req.file.path },function (error, success) 
      {
        if (error) 
        {
        console.log(error);
        } 
        else {
        res.send({message:"success"})
        }
    });
  },
  addFacultyPublication(req,res){
    FacultyProfile.findOneAndUpdate({ _id: req.body.id },
        { $push: { publications: {publicationName:req.body.publicationname,link:req.body.link,startdate:req.body.startdate,enddate:req.body.enddate}} },function (error, success) {
        if (error) {
        console.log(error);
        } else {
        res.send({message:"success"})
    }
    });
  },

//Editing
editFacultyLinks(req,res){
        console.log("Id" +req.body.id);
        console.log("link" +req.body.link);
        console.log("link" +req.body.linkid);
        FacultyProfile.updateOne({'links._id':req.body.linkid},
            {'$set': {
                'links.$.link': req.body.link,}},function(err,model) {
                if(err){
                    console.log(err);
                }
                else{
                    res.send({message:"success"})
                }
        });
    }
}