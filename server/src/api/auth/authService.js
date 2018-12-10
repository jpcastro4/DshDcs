const env = require('../../.env')
const _ = require('lodash')
const jwt = require('jsonwebtoken')
const scrypt = require('scrypt')
const User = require('../user/user')

const emailRegex = /\S+@\S+\.\S+/
const passRegex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/

const sendErrorFromDB = (res, dbErrors )=>{
    const errors = []

    _.forIn(dbErrors.errors, error=> errors.push(error.message))
    return res.status(400).json({errors})
}

const validateToken = (req, res, next) => {

    const token = req.body.token || ''

    jwt.verify(token, env.authSecret, (err, decoded) => {
        return res.status(200).send({ valid: !err })
    })
}

const signUpReseller = (req, res, next) => {

    const firstName = req.body.firstName || ''
    const lastName = req.body.lastName || ''
    const email = req.body.email || ''
    const pass = req.body.pass || ''
    const confirmPass = req.body.confirmPass || ''

    if (!email.match(emailRegex)) {
        return res.status(400).send({ erros: ["Formato de e-mail inválido"] })
    }

    if (!pass.match(passRegex)) {
        return res.status(400).send({ erros: ["Forma da senha errada: Use letras maiusculas, minusculas, numeros e caracteres espciais. Minimo 6 caracteres e maximo 20"] })
    }

    if (confirmPass != pass) {
        return res.status(400).send({ errors: ["Senhas não conferem."] })
    }

    var scryptParameters = scrypt.paramsSync(0.1);
    var key = new Buffer(pass);
    const passHash = scrypt.kdfSync(key, scryptParameters);

    User.findOne({ email }, (err, user) => {
        if (err) {
            return sendErrorFromDB(res, err)
        } else if (user) {
            return res.status(400).send({ errors: ["Usuario já está cadastrado"] })
        }
        else {

            const token = jwt.sign(user.toJSON(), env.userToken, {
                expiresIn: "1 day"
            })
            
            const newUser = new User({ firstName, lastName, email, token: token, pass: passHash.toString("hex"), reseller:true, status:true })

            newUser.save(err => {

                if (err) {
                    return sendErrorFromDB(res, err)
                } else {
                    //Enviar email de confirmação aqui com token de ativação

                    return res.status(200).send({ result: true, message: "Confira sua caixa de e-mails e finalize a criação da conta." })
                }
            })
        }
    })
}

const signUp = (req, res, next) => {

    const firstName = req.body.firstName || ''
    const lastName = req.body.lastName || ''
    const email = req.body.email || ''
    const pass = req.body.pass || ''
    const confirmPass = req.body.confirmPass || ''

    if (!email.match(emailRegex)) {
        return res.status(400).send({ erros: ["Formato de e-mail inválido"] })
    }

    if (!pass.match(passRegex)) {
        return res.status(400).send({ erros: ["Forma da senha errada: Use letras maiusculas, minusculas, numeros e caracteres espciais. Minimo 6 caracteres e maximo 20"] })
    }

    if (confirmPass != pass) {
        return res.status(400).send({ errors: ["Senhas não conferem."] })
    }

    var scryptParameters = scrypt.paramsSync(0.1);
    var key = new Buffer(pass);
    const passHash = scrypt.kdfSync(key, scryptParameters);

    User.findOne({ email }, (err, user) => {
        if (err) {
            return sendErrorFromDB(res, err)
        } else if (user) {
            return res.status(400).send({ errors: ["Usuario já está cadastrado"] })
        }
        else {

            const newUser = new User({ firstName, lastName, email, pass: passHash.toString("hex") })

            newUser.save(err => {

                if (err) {
                    return sendErrorFromDB(res, err)
                } else {
                    login(req, res, next)
                }
            })
        }
    })
}

const login = (req,res,next)=>{

    const email = req.body.email || ''
    const pass = req.body.pass || ''

    const scryptParameters = scrypt.paramsSync(0.1);
    const passHash = scrypt.kdfSync(pass, scryptParameters);

    User.findOne({email}, (err,user)=>{

        if(err){
            return sendErrorFromDB(res, err)
        }
        else if(user && scrypt.verifyKdfSync(passHash, user.pass)){
            const token = jwt.sign(user.toJSON(), env.authSecret, {
                expiresIn : "1 day"
            })

            const {lastName,email,_id} = user

            res.json({lastName,email,code:_id,token})
        }
        else{
            return res.status(400).send({ errors: ["Usuário ou senha inválido"]})
        }

    })
}

const lostPass = (req, res, next)=>{

    const email = req.body.email || ''

    User.findOne({email}, (err,user)=>{

        if(err){
            return sendErrorFromDB(res, err)
        }
        else if(user && bcrypt.compareSync(pass, user.pass)){
            const token = jwt.sign(user.toJSON(), env.authSecret, {
                expiresIn : "1 day"
            })

            const {lastName,email,_id} = user

            res.json({lastName,email,code:_id,token})
        }
        else{
            return res.status(400).send({ errors: ["Usuário ou senha inválido"]})
        }

    })

}



// Auth.methods(['get'])
// Auth.updateOptions({new: true, runValidators: true})

module.exports = {login,signUpReseller,validateToken,lostPass}