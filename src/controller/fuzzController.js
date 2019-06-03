const _defuzzificacao = require("../service/defuzzificacao")
const paladares = []
paladares['Fraco'] = 15.0
paladares['Suave'] = 20.0
paladares['Forte'] = 25.0
paladares['Não é Cuba Livre'] = 30.0


const fuzzController = {
    paladar: function(qtdRefri, qtdRun, qtdGelo, refri){

        const defuzzificacao = _defuzzificacao(qtdRefri, qtdRun, qtdGelo, refri)
    
        return defuzzificacao.paladar(defuzzificacao.fraco(refri),
        defuzzificacao.suave(refri), defuzzificacao.forte(refri))
    },
    cobrarEInformar: function(values){
        if (values.length === 1){
            console.log('Cuba Livre ' + values[0])
            console.log('Preço: R$ ' + Number.parseFloat(paladares[values[0]]).toFixed(2).replace('.', ','))
        } else {
            console.log(values[0])
            console.log('Pois:')

            for (var i = 1; i < values.length; i++){
                console.log(values[i])
            }
            console.log('Preço: R$ ' + Number.parseFloat(paladares[values[0]]).toFixed(2).replace('.', ','))
        }
    }
}

module.exports = fuzzController