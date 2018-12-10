const restful = require('node-restful')
const mongoose = restful.mongoose

const businessSchema = new mongoose.Schema({
    businessName: {type: String, required: true},
    accountId: {type: String, required:true},
    status:{type:Boolean, default: true},
    dateSign: {type: Date, default: Date.now }
})

module.exports = restful.model('Business', businessSchema)