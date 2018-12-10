const restful = require('node-restful')
const mongoose = restful.mongoose

const accountSchema = new mongoose.Schema({
    email: {type: String, required: true},
    firstName: {type: String, required: true},
    lastName:{type:String,required:true},
    pass:{type:String,required:true},
    reseller: {type:Boolean, required:true, default: false},
    adm: {type:Boolean, required:true, default:false},
    status:{type: Boolean, defulat: true},
    token: {type: String, required:false},
    dateSign: {type: Date, default: Date.now }
})

module.exports = restful.model('User', accountSchema)