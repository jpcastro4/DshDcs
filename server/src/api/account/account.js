const restful = require('node-restful')
const env = require('../../.env')
const mongoose = restful.mongoose

const accountSchema = new mongoose.Schema({
    userId: {type: String, required: true},
    name: {type: String, required: true},
    logoPath:{type:String,required:true},
    domain:{type:String, required:false},
    tempDomain: {type:String, required:true},
    status:{type: Boolean, defulat: true},
    dateSign: {type: Date, default: Date.now }
})

module.exports = restful.model('Account', accountSchema)