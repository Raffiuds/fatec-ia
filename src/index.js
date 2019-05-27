const cocaCola = require("../src/model/cocaCola")
const pepsi = require("../src/model/pepsiCola")
const des = require("../src/service/defuzzificacao")

function olaMundo(){
    
    const dess = des(53, 26, 20)

    console.log("Coca-cola")
    console.log("Fraco: " + dess.fraco(cocaCola))
    console.log("Suave: " + dess.suave(cocaCola))
    console.log("Forte: " + dess.forte(cocaCola))
    console.log(dess.paladar(dess.forte(cocaCola), dess.suave(cocaCola), dess.fraco(cocaCola)))

    console.log((0.5 + 0.5) / 3)
}

olaMundo()

