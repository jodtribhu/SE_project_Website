const crypto=require('crypto');

module.exports=(sequelize,DataTypes)=>{
    const User =sequelize.define('User',{
        email:{
            type:DataTypes.STRING,
            unique:true
        },
        salt:{
            type:DataTypes.STRING,
        },
        hash:{
            type:DataTypes.STRING,
        },
        
    })
    User.prototype.validPassword=function(candiatepassword){
        var hashVerify=crypto.pbkdf2Sync(candiatepassword,String(this.salt),10000,60,'sha512').toString('hex');
        var bt=String(this.hash) === hashVerify;
        return bt;
    }
    return User;
}

