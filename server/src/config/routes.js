const express = require('express')
const auth = require('./auth')
const authAccount = require('./authAccount')
module.exports = (server)=>{

    //PROTEGIDAS
    const protected = express.Router()
    server.use('/api', protected)

    protected.use(auth)

    const usersService = require('../api/account/accountService')
    protected.get('/user', usersService.allUsers)
    protected.post('/user/:id', usersService.editUser)

    const boxService = require('../api/box/boxService')
    boxService.register(protected, '/box')

    const boxMemberService = require('../api/box/boxMemberService')
    boxMemberService.register(protected, '/box/member')

    const boxStatusService = require('../api/box/boxStatusService')
    boxStatusService.register(protected, '/box/status')

    const objectService = require('../api/object/objectService')
    objectService.register(protected, '/object')

    const orderService = require('../api/order/orderService')
    orderService.register(protected, '/order')

    const paymentService = require('../api/payment/paymentService')
    paymentService.register(protected, '/payment')

    
    //API ROUTERS
    const open = express.Router()
    server.use('/auth', open)
    server.use(authAccount)

    //TODO Routes
    const authService = require('../api/auth/authService')
    open.post('/login', authService.login)
    open.post('/validateToken', authService.validateToken)     
    open.post('/signup', authService.signUpReseller)
    
}