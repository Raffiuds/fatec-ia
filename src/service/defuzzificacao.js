const run = require("../model/run")
const gelo = require("../model/gelo")

const paladares = ["Forte", "Suave", "Fraco", "Não é Cuba Libre"]

const defuzzificacao = function(qtdRefri, qtdRun, qtdGelo){
    
    return {
        qtdRefri:qtdRefri,
        qtdRun:qtdRun,
        qtdGelo:qtdGelo,

        suave: function(refri){
            return Math.max(
                Math.min(refri.forte(qtdRefri), run.fraco(qtdRun), gelo(qtdGelo)),
                Math.min(refri.suave(qtdRefri), run.suave(qtdRun), gelo(qtdGelo)),
                Math.min(refri.fraca(qtdRefri), run.forte(qtdRun), gelo(qtdGelo))
            )

        },

        forte: function(refri){
            return Math.max(
                Math.min(refri.forte(qtdRefri), run.suave(qtdRun), gelo(qtdGelo)),
                Math.min(refri.forte(qtdRefri), run.forte(qtdRun), gelo(qtdGelo)),
                Math.min(refri.suave(qtdRefri), run.forte(qtdRun), gelo(qtdGelo))
            )
        },

        fraco: function(refri){
            return Math.max(
                Math.min(refri.fraca(qtdRefri), run.fraco(qtdRun), gelo(qtdGelo)),
                Math.min(refri.fraca(qtdRefri), run.suave(qtdRun), gelo(qtdGelo)),
                Math.min(refri.suave(qtdRefri), run.fraco(qtdRun), gelo(qtdGelo))
            )
        },

        /*Função paladar recebe três parametros em forma de array
            @param forte
            @param suave
            @param fraco
            @return grau de paladar "Não é Cuba Libre"; "Forte"; "Suave"; "Fraco"
        */
        paladar: function(... values){
            
            const max = Math.max(... values)

            if (max === 0 ){
                return paladares[3]
            } 

            const maxs = values.filter((e) =>{
                return e === max
            })

            if (maxs.length == 1){
                
                const index = values.findIndex((e) => {
                    return e == max
                })

                return paladares[index]
            } else {

                return "Ainda em implementação"
            }

        }
    }
}

module.exports = defuzzificacao