const restful = require('node-restful')
const mongoose = restful.mongoose

const planSchema = new mongoose.Schema({
    planName: {type: String, required: true},
    amount: {type: String, required: true},
    cicle:{type:String,required:true},
    status:{type:String},
    dateSign: {type: Date, default: Date.now }
})

module.exports = restful.model('Plan', planSchema)