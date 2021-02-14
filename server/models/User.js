module.exports=(sequelize,DataTypes)=>{
    const user =sequelize.define('User',{
        email:{
            type:DataTypes.STRING,
            unique:true
        },
        password:DataTypes.STRING
    })
    return user;
}