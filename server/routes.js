const AuthenticationController=require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy=require('./policies/AuthenticationControllerPolicy');

const passport=require('passport');
require('./passport')(passport) 
function isAdmin(req,res,next)
{
    if(req.isAuthenticated()&&req.user.isAdmin==true)
    {
        next()
    }
    else
    {
        res.status(409).json({success:false,msg:'You are not Authorized'})
    }
}
module.exports=(app)=>
{
    app.post('/register',AuthenticationControllerPolicy.register,AuthenticationController.register)
    app.post('/login',AuthenticationController.login)
    app.post('/protected-route',passport.authenticate('jwt', { session: false }),(req,res,next)=>{
        console.log(req.isAuthenticated());
        res.status(200).json({success:true,msg:'You are Authorized'})
    })
    app.post('/admin-route',passport.authenticate('jwt', { session: false }),(req,res,next)=>{
        
    if(req.isAuthenticated()&&req.user.isAdmin==true)
         {
        console.log("You are allowed into admin route");
        res.status(200).json({success:true,msg:'You are Authorized into admin route'})
       }
    else
    {
        res.status(409).json({success:false,msg:'You are not Authorized'})
    }
        
    })
}