const User=require('../models/User');
const jwt= require('jsonwebtoken');
const config=require('../config/config')
const crypto=require('crypto');
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/UserDB", { useNewUrlParser: true });
const ONE_WEEK=60*60*24*7;
function jwtSignUser(user)
{
    
    return jwt.sign(user,config.authentication.jwtSecret,{
        expiresIn:ONE_WEEK
    })
}
function genPassword(password)
{
    console.log("Inside password"+password);
    var salt=crypto.randomBytes(32).toString('hex');
    var genhash=crypto.pbkdf2Sync(password,salt,10000,60,'sha512').toString('hex');
    console.log("Inside password"+salt+" "+genhash);
    return {salt:salt,hash:genhash};
}
 function validatePassword(candiatepassword,hash,salt){
    var hashVerify=crypto.pbkdf2Sync(candiatepassword,String(salt),10000,60,'sha512').toString('hex');
    var bt=String(hash) === hashVerify;
    return Promise.resolve(bt); ;
    }
module.exports={
    async register(req,res){
        const userpassworddetails= genPassword(req.body.password);
        const user=new User({email:req.body.email,salt:userpassworddetails.salt, hash:userpassworddetails.hash,isAdmin:req.body.isAdmin});
        user.save().then((user) => {
            res.send({registration:"Successfull"}); 
        })
        .catch((error) => {
            console.log(error);
            res.send(400, "Bad Request");
        });
         
    },
    async login(req,res){
        try {
            const {email,password}=req.body;
            const user =await User.findOne({
                where:{
                    email:email
                }
            });  
            User.findOne({ email: email}, function (err, user) {
                if(!user)
                {
                    res.status(403).send({
                        error:"The login information was incorrect"
                    });
                }
                validatePassword(password,user.hash,user.salt).then(function(isPasswordValid){
                    console.log(isPasswordValid);
                     if(!isPasswordValid)
                        {
                        res.status(403).send({error:"The login information was incorrect"});
                        }
                        else{
                            afterloginuser={
                                email:user.email,
                                id:user.id,
                                isAdmin:user.isAdmin,
                                expiresIn:ONE_WEEK
                            }
                            console.log(user);
                            res.send({user:user,token:"Bearer "+jwtSignUser(afterloginuser),expiresIn:ONE_WEEK,isAdmin:user.isAdmin});
                        }
                    
                })
                
            });
           
        } catch (error) {
            console.log(error);
            res.status(500).send({
                error:"An error has occured trying to login"
            });
        }       
    },
    
   
}
