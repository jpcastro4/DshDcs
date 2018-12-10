const nodeMailer = require('nodemailer')
const template = require('./templates')

const transporter = nodeMailer.createTransporter({

    host:'smpt.weegbox.com',
    port: 587,
    secure: false,
    auth:{
        user:'authentication@weegbox.com',
        pass:'somosweegbox@2018'
    }
})

module.exports = (send)=>{

    let mailOptions = {

        from: '"João" <joao@weegbox.com>',
        to: send.email,
        subject: send.subject,
        text: send.template
    }
}