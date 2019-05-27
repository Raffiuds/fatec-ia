const cocaCola = require("../../src/model/cocaCola")

test('Coca-cola Forte 1 ', () => {
    expect(cocaCola.forte(49)).toBe(0)
})


test('Coca-cola Forte 2 ', () => {
    expect(cocaCola.forte(51)).toBe(1)
})

test('Coca-cola Forte 3 ', () => {
    expect(cocaCola.forte(53)).toBe(0.5)
})

test('Coca-cola Forte 4 ', () => {
    expect(cocaCola.forte(55)).toBe(0)
})

test('Coca-cola Suave 1 ', () => {
    expect(cocaCola.suave(51)).toBe(0)
})

test('Coca-cola Suave 2 ', () => {
    expect(cocaCola.suave(53)).toBe(0.5)
})

test('Coca-cola Suave 3 ', () => {
    expect(cocaCola.suave(55)).toBe(1)
})

test('Coca-cola Suave 4 ', () => {
    expect(cocaCola.suave(57)).toBe(0.5)
})

test('Coca-cola Suave 5 ', () => {
    expect(cocaCola.suave(58)).toBe(0)
})

test('Coca-cola Fraca 1 ', () => {
    expect(cocaCola.fraca(52)).toBe(0)
})

test('Coca-cola Fraca 2 ', () => {
    expect(cocaCola.fraca(57)).toBe(0.5)
})

test('Coca-cola Fraca 3 ', () => {
    expect(cocaCola.fraca(59)).toBe(1)
})

test('Coca-cola Fraca 4 ', () => {
    expect(cocaCola.fraca(61)).toBe(0)
})