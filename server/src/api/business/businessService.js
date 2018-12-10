const Box = require('./box')

Box.methods(['get','post','put'])
Box.updateOptions({new: true, runValidators: true})

module.exports = Box