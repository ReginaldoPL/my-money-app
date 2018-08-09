const server = require('./config/server')
require('./config/database')
//server passa como parametro
require('./config/routes')(server)