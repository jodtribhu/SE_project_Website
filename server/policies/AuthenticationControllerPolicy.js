const Joi=require('joi');
module.exports={
    register(req,res,next){
        const schema=Joi.object({
            email:Joi.string().email(),
            password:Joi.string().regex(new RegExp('^[a-zA-Z0-9]{8,32}$'))
        })
        inputvalue={
            "email":req.body.email,
            "password":req.body.password
        }
        const {error,value}=schema.validate(inputvalue);

        if(error)
        {
            log
            switch(error.details[0].context.key)
            {
                case 'email':
                    res.status(400).send({
                        error:'You must provide a valid Email Address'
                    })
                    break;
                case 'password':
                    res.status(400).send({
                        error:'The password entered does not match the criteria'
                    })
                    break;
                default:    res.status(400).send({
                    error:'Invalid Registration Information'
                })
                break;
            }
        }
        else{
            next();
        }
      
    }
}   