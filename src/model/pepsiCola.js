const pepsiCola = {
    forte: function (x) {
        if (x < 60) {
            return 0 
        } else if (x >= 60 && x < 62){
            return 1
        } else if (x >= 62 && x <= 64){
            return (64 - x) / (64 - 62)
        } else if (x > 64){
            return 0
        }
    },

    suave: function (x) {
        if (x < 62){
            return 0
        } else if (x >= 62 && x <= 64){
            return (x - 62) / (64 - 62)
        } else if (x > 64 && x < 66){
            return 1
        } else if (x >= 66 && x <= 68) {
            return (68 - x) / (68 - 66)
        } else {
            return 0
        }
    }, 

    fraca: function (x){
        if (x < 66 ){
            return 0
        } else if (x >= 66 && x <= 68) {
            return (x - 66) / (68 - 66)
        } else if (x > 68 && x <= 70){
            return 0 
        }
    }, 

    informar: function(){
        return [
            "quantidade de Pepsi não é compativel. Quantidade aceitavel é de 60ml a 70ml",
            "quantidade de run não é compativel. Quantidade aceitavel é de 10ml a 30ml",
            "quantidade de gelo não é compativel. Quantidade aceitavel é de 20ml",
        ]
    }
}

module.exports = pepsiCola