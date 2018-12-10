const Order = require('./order')

Order.methods(['post','get','put'])
Order.updateOptions({new: true, runValidators: true})

module.exports = Order