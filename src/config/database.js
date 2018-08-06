const mongoose = require('mongoose')
/*para evitar erros de console*/
mongoose.Promise = global.Promise
module.exports = mognoose.connect('mongodb://localhost/mymoney')
