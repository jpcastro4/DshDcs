const restful = require('node-restful')
const mongoose = restful.mongoose

const businessTax = new mongoose.Schema({
    businessId: {type: String, required: true},
    userId: {type: String, required: true},
    userType:{type:String, required:true},
    dateSign: {type: Date, default: Date.now }
})

module.exports = restful.model('BusinessTax', businessTax)