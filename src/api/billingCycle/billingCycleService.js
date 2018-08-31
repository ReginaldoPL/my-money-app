/*modelo*/
const BillingCycle = require('./billingCycle')
const errorHandler = require('../commom/errorHandler')

/*definição dos métodos, pode excluir algum se quiser*/
BillingCycle.methods(['get', 'post', 'put', 'delete'])
/*put por padrão permire violar as regras de validação, 
        pra isso a linha abaixo = runValidators
        new:true exige que devolva o novo registro e não o anterior*/
BillingCycle.updateOptions({new:true, runValidators: true })

BillingCycle.after('post',errorHandler).after('put',errorHandler)

BillingCycle.route('count',(req,res, next)=>{
        BillingCycle.count((error,value) => {
                if(error)
                {
                        res.status(500).json({errors: [error]})
                } else 
                {
                        res.json({value})

                }
        })
})

BillingCycle.route('summary', (req, res, next)=> {
        BillingCycle.aggregate({
                $project: {credit: {$sum: "$credits.value"}, debt:{$sum:"$debts.value"}}
        }, {
                $group:  {_id:null,credit:{$sum:"$credit"},debt:{$sum: "$debt"}}
        },{
                $project:{_id:0,credit:1,debt:1}           
           
        },(error,result) => {
                if (error){
                        res.status(500).json({errors:[error]})
                } else{
                        res.json(result[0] || {credit:0, debt:0})
                }
        })
})


module.exports = BillingCycle
