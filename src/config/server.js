const port = 3003


const bodyParser = require('body-parser')
/*require referencia única*/
const express = require('express')
/*nova referencia*/
const server = express()

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())

server.listen(port, function(){
    console.log(`BACKEND está rodando na porta ${port}.`)
})

module.exports = server
