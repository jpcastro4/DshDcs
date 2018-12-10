const _ = require('lodash')
const scrypt = require('scrypt')
const Account = require('../user/user')
const AuthService = require('./authService')

const emailRegex = /\S+@\S+\.\S+/
const passRegex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/

const sendErrorFromDB = (res, dbErrors )=>{
    const errors = []

    _.forIn(dbErrors.errors, error=> errors.push(error.message))
    return res.status(400).json({errors})
}

const signUp = (req, res, next)=>{

    const firstName = req.body.firstName || ''
    const lastName = req.body.lastName || ''
    const email = req.body.email || ''
    const pass = req.body.pass || ''
    const confirmPass = req.body.confirmPass || ''

    if(!email.match(emailRegex) ){
        return res.status(400).send({erros:["Formato de e-mail inválido"]})
    }

    if(!pass.match(passRegex)){
        return res.status(400).send({erros:["Forma da senha errada: Use letras maiusculas, minusculas, numeros e caracteres espciais. Minimo 6 caracteres e maximo 20"]})
    }

    if(confirmPass != pass){
        return res.status(400).send({errors: ["Senhas não conferem."]})
    }

    var scryptParameters = scrypt.paramsSync(0.1);
    var key = new Buffer(pass);
    const passHash = scrypt.kdfSync(key, scryptParameters);
    
    Account.findOne({email}, (err, user)=>{
        if(err){
            return sendErrorFromDB(res,err)
        }else if(user){
            return res.status(400).send({errors: ["Usuario já está cadastrado"] })
        }
        else{

            const newUser = new Account({firstName,lastName,email,pass:passHash.toString("hex") })

            newUser.save(err=>{

                if(err){
                    return sendErrorFromDB(res, err)
                }else{
                    AuthService.login(req,res,next)
                }
            })
        }
    })
}

const allUsers = (req, res, next)=>{
    Account.find( (err, users)=>{
        if(err){
            return sendErrorFromDB(res,err)
        }else if(users){
            return res.status(200).send(users)
        }
        else{
            return res.status(400).send({errors: ["Nenhum usuaruio"] })
        }
    })
}

const editUser = (req, res, next)=>{

    //return res.status(200).send({ erros: ['Editando usuario']})

    Account.update(req.body)
  
}

module.exports =  {signUp, allUsers, editUser}