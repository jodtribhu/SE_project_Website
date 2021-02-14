const {User}=require('../models');
const jwt= require('jsonwebtoken');
const config=require('../config/config')
const crypto=require('crypto');

function jwtSignUser(user)
{
    const ONE_WEEK=60*60*24*7;
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

module.exports={
    async register(req,res){
        const userpassworddetails= genPassword(req.body.password);
        try {
            
            const user =await User.create({
                email:req.body.email,
                salt:userpassworddetails.salt,
                hash:userpassworddetails.hash});  
            res.send(user.toJSON());
        } catch (error) {
            res.status(400).send({
                error:error
            });
        }       
    },
    async login(req,res){
        try {
            const {email,password}=req.body;
            const user =await User.findOne({
                where:{
                    email:email
                }
            });  
            if(!user)
            {
                res.status(403).send({
                    error:"The login information was incorrect"
                });
            }
          
            const isPasswordValid= await user.validPassword(password);
            if(!isPasswordValid)
            {
                res.status(403).send({
                    error:"The login information was incorrect"
                });
            }
            const userJson=user.toJSON();
            res.send({
                user:userJson,
                token:jwtSignUser(userJson)
            })

        } catch (error) {
            console.log(error);
            res.status(500).send({
                error:"An error has occured trying to login"
            });
        }       
    }


   
}