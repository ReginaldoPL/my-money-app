const mongoose = require('mongoose')
/*para evitar erros de console*/
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/mymoney')


mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório"
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'."
mongoose.Error.messages.String.enum = "'{VLAUE}' não é válido para o atributo '{PATH}'."