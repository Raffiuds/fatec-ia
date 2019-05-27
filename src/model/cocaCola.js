const  concaCola = {
    forte: function (x) {
        if (x < 50) {
            return 0 
        } else if (x >= 50 && x < 52){
            return 1
        } else if (x >= 52 && x <= 54){
            return (54 - x ) / (54 - 52)
        } else {
            return 0
        }

    },

    suave: function (x) {
        if (x  < 52) {
            return 0 
        } else if ( x >= 52 && x <= 54 ){
            return (x - 52) / (54 - 52)
        } else if ( x > 54 && x < 56) {
            return 1
        } else if ( x >= 56 && x < 58){
            return (58 - x) / (58 - 56)
        } else {
            return 0 
        }
    },

    fraca: function (x) {
        if (x < 56 ){
            return 0
        } else if (x >= 56 && x <= 58){
            return (x - 56) / (58 - 56)
        } else if (x > 58 && x <= 60){
            return 1
        } else {
            return 0
        }
    }

}

module.exports =  concaCola
