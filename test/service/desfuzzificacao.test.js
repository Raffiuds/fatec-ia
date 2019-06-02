const _desfuzzicacao = require("../../src/service/defuzzificacao")
const coca = require("../../src/model/cocaCola")
const pepsi = require("../../src/model/pepsiCola")

const desfCoca = _desfuzzicacao(58, 25, 20, coca)
test("Desfuzzicação Coca", () => {

    
    expect(desfCoca.fraco()).toBe(1)
    expect(desfCoca.suave()).toBe(0.4)
    expect(desfCoca.forte()).toBe(0)
})

test("Desfuzzicação Coca Paladar Fraco", () =>{

    expect(desfCoca.paladar(1, 0.4, 0)).toStrictEqual(["Fraco"])
})

test("Desfuzzicação Coca Paladar Suave", () =>{

    expect(desfCoca.paladar(0.4, 1, 0)).toStrictEqual(["Suave"])
})

test("Desfuzzicação Coca Paladar Forte", () =>{

    expect(desfCoca.paladar(0.4, 1, 1)).toStrictEqual(["Forte"])
})

test("Desfuzzicação Coca Paladar Não é Cuba Libre", () =>{

    expect(desfCoca.paladar(0, 0, 0)).toStrictEqual([
        "Não é Cuba Livre",
        "quantidade de Coca-Cola não é compativel. Quantidade aceitavel é de 50ml a 60ml",
        "quantidade de run não é compativel. Quantidade aceitavel é de 10ml a 30ml",
        "quantidade de gelo não é compativel. Quantidade aceitavel é de 20ml",
    ])
})


const desfPepsi = _desfuzzicacao(66, 25, 20, pepsi)
test("Desfuzzicação Coca", () => {

    
    expect(desfPepsi.fraco()).toBe(0)
    expect(desfPepsi.suave()).toBe(1)
    expect(desfPepsi.forte()).toBe(0.4)
})

test("Desfuzzicação Coca Paladar Fraco", () =>{

    expect(desfPepsi.paladar(1, 0.4, 0)).toStrictEqual(["Fraco"])
})

test("Desfuzzicação Coca Paladar Suave", () =>{

    expect(desfPepsi.paladar(0.4, 1, 0)).toStrictEqual(["Suave"])
})

test("Desfuzzicação Coca Paladar Forte", () =>{

    expect(desfPepsi.paladar(0.4, 1, 1)).toStrictEqual(["Forte"])
})

test("Desfuzzicação Coca Paladar Não é Cuba Libre", () =>{

    expect(desfPepsi.paladar(0, 0, 0)).toEqual(
        expect.arrayContaining([
        "Não é Cuba Livre",
        "quantidade de Pepsi não é compativel. Quantidade aceitavel é de 60ml a 70ml",
        "quantidade de run não é compativel. Quantidade aceitavel é de 10ml a 30ml",
        "quantidade de gelo não é compativel. Quantidade aceitavel é de 20ml",
    ]))
})