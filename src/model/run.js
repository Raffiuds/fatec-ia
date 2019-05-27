const run = {
    forte: function (x) {
        if (x < 23) {
            return 0
        } else if (x >= 23 && x <= 28) {
            return (x - 23) / (28 - 23)
        } else if (x > 28 && x <= 30){
            return 1
        } else {
            return 0
        }
    },

    suave: function (x) {
        if (x < 15 ){
            return 0
        } else if (x >= 15 && x <= 20) {
            return (x - 15) / (20 - 15)
        } else if (x > 20 && x < 25) {
            return 1
        } else if (x >= 25 && x <= 27){
            return (27 - x) / (27 - 25)
        } else {
            return 0
        }

    },

    fraco: function (x) {
        if (x < 10 ){
            return 0
        } else if (x >= 10 && x <= 15){
            return 1
        } else if (x >= 15 && x <= 20){
            return (20 - x) / (20 - 15)
        } else {
            return 0 
        }
    }
}

module.exports = run