const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const morgan = require('morgan')
const server = express()
const allowCors = require('./cors')

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json()) 
server.use(allowCors) //libera o cors que bloqueia ou nao o acesso de outros dominios
server.use(morgan('combined'))

server.listen(port, ()=>{
    console.log(`Rodando em ${port}`)
} )

module.exports = server