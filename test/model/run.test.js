const run = require("../../src/model/run")

test('Run Forte 1 ', () => {
    expect(run.forte(9)).toBe(0)
})

test('Run Forte 2 ', () => {
    expect(run.forte(24)).toBe(0.2)
})


test('Run Forte 3 ', () => {
    expect(run.forte(29)).toBe(1)
})

test('Run Forte 4 ', () => {
    expect(run.forte(31)).toBe(0)
})

test('Run Suave 1 ', () => {
    expect(run.suave(14)).toBe(0)
})

test('Run Suave 2 ', () => {
    expect(run.suave(16)).toBe(0.2)
})

test('Run Suave 3 ', () => {
    expect(run.suave(21)).toBe(1)
})

test('Run Suave 4 ', () => {
    expect(run.suave(26)).toBe(0.5)
})

test('Run Suave 5 ', () => {
    expect(run.suave(28)).toBe(0)
})

test('Run Fraco 1 ', () => {
    expect(run.fraco(9)).toBe(0)
})

test('Run Fraco 2 ', () => {
    expect(run.fraco(11)).toBe(1)
})

test('Run Fraco 3 ', () => {
    expect(run.fraco(19)).toBe(0.2)
})

test('Run Fraco 4 ', () => {
    expect(run.fraco(21)).toBe(0)
})
