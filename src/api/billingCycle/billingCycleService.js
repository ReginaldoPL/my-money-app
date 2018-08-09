/*modelo*/
const BillingCycle = require('./billingCycle')

/*definição dos métodos, pode excluir algum se quiser*/
BillingCycle.methods(['get', 'post', 'put', 'delete'])
/*put por padrão permire violar as regras de validação, 
        pra isso a linha abaixo = runValidators
        new:true exige que devolva o novo registro e não o anterior*/
BillingCycle.updateOptions({new:true, runValidators: true })


module.exports = BillingCycle
