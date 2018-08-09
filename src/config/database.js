const mongoose = require('mongoose')
/*para evitar erros de console*/
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/mymoney')


mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório"