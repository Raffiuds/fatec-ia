const i = require("../src/index")

test("testar validation", () =>{

    expect(i("2,4")).toBe(true)
})