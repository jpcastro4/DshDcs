const BoxMember = require('./boxMember')

// const sendErrorFromDB = (res, dbErrors )=>{
//     const errors = []

//     _.forIn(dbErrors.errors, error=> errors.push(error.message))
//     return res.status(400).json({errors})
// }

// BoxMember.route('post', (req,res,next)=>{

//     const userId = req.body.userId || ''
//     const boxId = req.body.boxId || ''

//     if(!userId || !boxId ){
//         return res.status(400).send({errors: ["Parametros Obrigatorios"] })
//     }

//     BoxMember.find({userId,boxId}, (err,user)=>{
        
//         if(err){
//             return sendErrorFromDB(res,err)
//         }else if(user){
//             return res.status(400).send({errors: ["Usuario já está cadastrado"] })
//         }else{
//             const newUser = new Account({userId,boxId})

//             newUser.save(err=>{

//                 if(err){
//                     return sendErrorFromDB(res, err)
//                 }else{
//                     return res.status(200).send({message:'Usuario inserido'})
//                 }
//             })
//         }

//     })
// })

BoxMember.methods(['post','get'])
BoxMember.updateOptions({new: true, runValidators: true})

module.exports = BoxMember