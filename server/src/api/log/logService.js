const Download = require('./download')
const Access = require('/.access')
const Upload = require('/upload')

Download.methods(['post','get'])
//Download.updateOptions({new: true, runValidators: true})

Access.methods(['post', 'get'])
//Access.updateOptions({ new: true, runValidators: true })

Upload.methods(['post', 'get'])
//Upload.updateOptions({ new: true, runValidators: true })

module.exports = {Download, Access, Upload}