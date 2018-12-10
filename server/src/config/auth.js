const jwt = require('jsonwebtoken')
const env = require('../.env')

module.exports = (req,res,next)=>{

    if(req.method == 'OPTIONS'){
        next()
    }else{

        console.log(req)

        const token = req.body.token || req.query.token || req.headers['authorization']
         
        if(!token){

            return res.status(403).send(({erros:['No token provided']}))
        }

        jwt.verify(token,env.authSecret, (err, decoded)=>{

            if(err){
                return res.status(403).send({errors: ['Failed authentication token.'], message: err.message, data:decoded })
            }else{
                //req.decoded = decoded 
                next()
            }


        })
    }
}