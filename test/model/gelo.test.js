const gelo = require("../../src/model/gelo")

test('Gelo 1 ', () => {
    expect(gelo(20)).toBe(1)
})

test('Gelo 2 ', () => {
    expect(gelo(19)).toBe(0)
})

test('Gelo 3 ', () => {
    expect(gelo(21)).toBe(0)
})
