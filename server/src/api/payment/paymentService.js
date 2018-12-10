const Payment = require('./payment')

Payment.methods(['post','get'])
Payment.updateOptions({new: true, runValidators: true})

module.exports = Payment