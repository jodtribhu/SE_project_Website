
const express= require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const morgan=require('morgan');
const config=require('./config/config');
const passport = require('passport');

const app=express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

require('./routes')(app)




app.listen(config.port||8081,function(err)
{
    if(err)
    {
        console.log(err);
    }
    else{
        console.log('Server has started');
    }
});

