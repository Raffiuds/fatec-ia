const run = require("../model/run")
const gelo = require("../model/gelo")

const paladares = ["Fraco", "Suave", "Forte", "Não é Cuba Livre"]

const defuzzificacao = function(qtdRefri, qtdRun, qtdGelo, refri){
    
    return {
        qtdRefri:qtdRefri,
        qtdRun:qtdRun,
        qtdGelo:qtdGelo,
        refri:refri,

        suave: function(){
            return Math.max(
                Math.min(refri.forte(qtdRefri), run.fraco(qtdRun), gelo(qtdGelo)),
                Math.min(refri.suave(qtdRefri), run.suave(qtdRun), gelo(qtdGelo)),
                Math.min(refri.fraca(qtdRefri), run.forte(qtdRun), gelo(qtdGelo))
            )

        },

        forte: function(){
            return Math.max(
                Math.min(refri.forte(qtdRefri), run.suave(qtdRun), gelo(qtdGelo)),
                Math.min(refri.forte(qtdRefri), run.forte(qtdRun), gelo(qtdGelo)),
                Math.min(refri.suave(qtdRefri), run.forte(qtdRun), gelo(qtdGelo))
            )
        },

        fraco: function(){
            return Math.max(
                Math.min(refri.fraca(qtdRefri), run.fraco(qtdRun), gelo(qtdGelo)),
                Math.min(refri.fraca(qtdRefri), run.suave(qtdRun), gelo(qtdGelo)),
                Math.min(refri.suave(qtdRefri), run.fraco(qtdRun), gelo(qtdGelo))
            )
        },

        /*Função paladar recebe três parametros em forma de array
            @param fraco
            @param suave
            @param forte
            @return grau de paladar "Não é Cuba Libre"; "Forte"; "Suave"; "Fraco"
        */
        paladar: function(... values){
            
            const max = Math.max(... values)

            if (max === 0 ){
                return [paladares[3]].concat(this.informar(refri))
            } 

            const maxs = values.filter((e) =>{
                return e === max
            })

            if (maxs.length == 1){
                
                const index = values.findIndex((e) => {
                    return e == max
                })

                return [paladares[index]]
            } else {

                const index = values.lastIndexOf(max)
                return [paladares[index]]
            }

        },

        informar: function(refri){

            const maxs = []
            maxs[0] = Math.max(refri.fraca(qtdRefri),
                refri.suave(qtdRefri), refri.forte(qtdRefri))
        
            maxs[1] = Math.max(run.fraco(qtdRun), run.suave(qtdRun),
                run.forte(qtdRun))
        
            maxs[2] = gelo(qtdGelo)
            
            min = Math.min(... maxs)
        
            mins = maxs.filter((e) =>{
                return e === min
            })
        
            if ( mins.length == 1 ) {
        
                index = maxs.findIndex((e) => {
                    return e == min
                })
                return [refri.informar()[index]]    
            } else {
                const arr = []
                maxs.forEach((e, index)=>{

                    if (e === min){
                        arr.push(refri.informar()[index])
                    }
                })
                return arr
            }
        }
    }
}




module.exports = defuzzificacao