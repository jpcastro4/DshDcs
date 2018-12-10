const restful = require('node-restful')
const mongoose = restful.mongoose

const paymentSchema = new mongoose.Schema({
    orderId: {type: String, required: true},
    userId:{type:String, required:true},
    status:{type:String, required:true},
    proccessDate: {type: Date, default: Date.now }
})

module.exports = restful.model('Payment', paymentSchema)