const restful = require('node-restful')
const mongoose = restful.mongoose

const orderSchema = new mongoose.Schema({
    userId: {type: String, required: true},
    boxId: {type: String, required: true},
    amount:{type:String,required:true},
    status:{type:String},
    openDate: {type: Date, default: Date.now }
})

module.exports = restful.model('Order', orderSchema)