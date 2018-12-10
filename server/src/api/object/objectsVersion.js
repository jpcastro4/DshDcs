const restful = require('node-restful')
const mongoose = restful.mongoose

const objVersion = new mongoose.Schema({
    objectId: {type: String, required: true},
    path: {type:String,required:true},
    size: { type: Number, required: true },
    status:{type:Boolean, default: true},
    dateSign: {type: Date, default: Date.now }
})

module.exports = restful.model('ObjectVersion', objVersion)