const restful = require('node-restful')
const mongoose = restful.mongoose

const objectSchema = new mongoose.Schema({
    title: {type: String, required: true},
    businessId: {type:String,required:true},
    type: { type: String, required: true },
    child: {type: String, required:false},
    versionId: {type: Number, required: true, default: 0},    
    status:{type:Boolean, default: true},
    dateSign: {type: Date, default: Date.now }
})

module.exports = restful.model('Object', objectSchema)