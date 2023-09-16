
const sum = require("./index")

describe("Testing the sum Function",() => {
    test("Add 2 positive number", () =>{
        expect(sum(1,2)).toBe(3)

    })
    test("Add 2 positive number", () =>{
        expect(sum(1,2)).toBe(3)

    })
    test("Call the sum function with 1 argument", () =>{
        expect(sum(1)).toBe("Need one more argument")

    })
    test("Call the sum test cases", () =>{
        expect(sum(1)).toBe(3)

    })
})