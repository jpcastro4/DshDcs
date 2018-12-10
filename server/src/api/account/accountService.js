const Account = require('./account')

const sendErrorFromDB = (res, dbErrors )=>{
    const errors = []

    _.forIn(dbErrors.errors, error=> errors.push(error.message))
    return res.status(400).json({errors})
}


const account = (req, res, next)=>{

    const name = req.body.name || ''
    const tempDomain = req.body.tempDomain || ''
     
    if (!pass.match(tempDomain)) {
        return res.status(400).send({ erros: ["Forma da senha errada: Use letras maiusculas, minusculas, numeros e caracteres espciais. Minimo 6 caracteres e maximo 20"] })
    }

    var scryptParameters = scrypt.paramsSync(0.1)
    var key = new Buffer(pass)
    const passHash = scrypt.kdfSync(key, scryptParameters)

    Account.findOne({ userId }, (err, user) => {
        if (err) {
            return sendErrorFromDB(res, err)
        } else if (user) {
            return res.status(400).send({ errors: ["Você já tem uma conta"] })
        }
        else {

            const newUser = new Account({ userId, name, tempDomain })

            newUser.save(err => {

                if (err) {
                    return sendErrorFromDB(res, err)
                } else {
                    return res.status(200).send({ result:true, message: "Conta criada. Faça o login" })
                }
            })
        }
    })
 
}

const accountEdit = (req, res, next)=>{

    //return res.status(200).send({ erros: ['Editando usuario']})

    Account.update(req.body)
  
}

module.exports =  { account, accountEdit}