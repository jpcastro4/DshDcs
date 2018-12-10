const restful = require('node-restful')
const mongoose = restful.mongoose

const accessLogSchema = new mongoose.Schema({
    userId: {type: String, required: true},
    objectId: {type: String, required: true},
    dateSign: {type: Date, default: Date.now }
})

module.exports = restful.model('AccessLog', accessLogSchema)