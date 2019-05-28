const cocaCola = require("../src/model/cocaCola")
const pepsi = require("../src/model/pepsiCola")
const des = require("../src/service/defuzzificacao")

function index(){
    
    const dess = des(5, 19, 20)

    console.log("Coca-cola")
    console.log("Fraco: " + dess.fraco(cocaCola))
    console.log("Suave: " + dess.suave(cocaCola))
    console.log("Forte: " + dess.forte(cocaCola))
    console.log(dess.paladar(dess.fraco(cocaCola),
        dess.suave(cocaCola), dess.forte(cocaCola)))
    dess.informa(cocaCola)
}

index()

