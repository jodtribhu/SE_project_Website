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
        });

        // Profile Visits Code

        var d = new Date();
        var weekday = new Array(7);
        weekday[0] = "sunday";
        weekday[1] = "monday";
        weekday[2] = "tuesday";
        weekday[3] = "wednesday";
        weekday[4] = "thursday";
        weekday[5] = "friday";
        weekday[6] = "saturday";

        var months = new Array(12);
        months[0] = "January";
        months[1] = "February";
        months[2] = "March";
        months[3] = "April";
        months[4] = "May";
        months[5] = "June";
        months[6] = "July";
        months[7] = "August";
        months[8] = "September";
        months[9] = "October";
        months[10] = "November";
        months[11] = "December";

        var fmonths = new Array(12);
        fmonths[0] = "fJanuary";
        fmonths[1] = "fFebruary";
        fmonths[2] = "fMarch";
        fmonths[3] = "fApril";
        fmonths[4] = "fMay";
        fmonths[5] = "fJune";
        fmonths[6] = "fJuly";
        fmonths[7] = "fAugust";
        fmonths[8] = "fSeptember";
        fmonths[9] = "fOctober";
        fmonths[10] = "fNovember";
        fmonths[11] = "fDecember";

        var fweekday = new Array(7);
        fweekday[0] = "fsunday";
        fweekday[1] = "fmonday";
        fweekday[2] = "ftuesday";
        fweekday[3] = "fwednesday";
        fweekday[4] = "fthursday";
        fweekday[5] = "ffriday";
        fweekday[6] = "fsaturday";

        console.log("Logged In Id"+req.body.loggedinUser);
        if(req.body.loggedinUser!=null){
            if(req.body.loggedinUser!=req.body.id){
                FacultyProfile.findByIdAndUpdate({_id:req.body.id},{'$inc': {'fvisits':1}},{new:true})
                .then((data)=>console.log("updatded"))
                .catch((err)=> console.log(err))

                /*Day Updation*/
                var wday=fweekday[d.getDay()]; 
                var update={}
                update[wday]=1;
                FacultyProfile.findByIdAndUpdate({_id:req.body.id},{'$inc': update},{new:true})
                .then((data)=>console.log("updatded Day"))
                .catch((err)=> console.log(err))

                /*Month Updation*/
                var updateMonth={}
                var fmonth=fmonths[d.getMonth()]; 
                updateMonth[fmonth]=1;
                FacultyProfile.findByIdAndUpdate({_id:req.body.id},{'$inc': updateMonth},{new:true})
                .then((data)=>console.log("updatded Day"))
                .catch((err)=> console.log(err))
            }
        }
        else
        {
            var wday=weekday[d.getDay()]; 
            var month=months[d.getMonth()]; 
            var update={}
            update[wday]=1;
        
             var updateMonth={}
             updateMonth[month]=1;
              console.log(update);
            FacultyProfile.findByIdAndUpdate({_id:req.body.id},{'$inc': {'tcount':1}},{new:true})
            .then((data)=>console.log("updatded"))
            .catch((err)=> console.log(err))
            FacultyProfile.findByIdAndUpdate({_id:req.body.id},{'$inc': update},{new:true})
            .then((data)=>console.log("updatded Day"))
            .catch((err)=> console.log(err))
            FacultyProfile.findByIdAndUpdate({_id:req.body.id},{'$inc': updateMonth},{new:true})
            .then((data)=>console.log("updatded Day"))
            .catch((err)=> console.log(err))
        }

        

 

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