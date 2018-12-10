const Objects = require('./objects')

Objects.methods(['post','get','put','delete'])
Objects.updateOptions({new: true, runValidators: true})

module.exports = Objects