const pepsiCola = require("../../src/model/pepsiCola")

test('Pepsi-cola Forte 1 ', () => {
    expect(pepsiCola.forte(59)).toBe(0)
})

test('Pepsi-cola Forte 2 ', () => {
    expect(pepsiCola.forte(60)).toBe(1)
})

test('Pepsi-cola Forte 3 ', () => {
    expect(pepsiCola.forte(63)).toBe(0.5)
})

test('Pepsi-cola Forte 4 ', () => {
    expect(pepsiCola.forte(65)).toBe(0)
})

test('Pepsi-cola Suave 1 ', () => {
    expect(pepsiCola.suave(61)).toBe(0)
})

test('Pepsi-cola Suave 2 ', () => {
    expect(pepsiCola.suave(63)).toBe(0.5)
})

test('Pepsi-cola Suave 3 ', () => {
    expect(pepsiCola.suave(65)).toBe(1)
})

test('Pepsi-cola Suave 4 ', () => {
    expect(pepsiCola.suave(67)).toBe(0.5)
})

test('Pepsi-cola Suave 5 ', () => {
    expect(pepsiCola.suave(69)).toBe(0)
})