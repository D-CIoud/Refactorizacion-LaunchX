const FizzBuzz = require("../lib/Services/FizzbuzzService");

describe("Test for FIZZBUZZ Explorers", () =>{
    test("1. Divide by 3 and return FIZZ", () => {
        const explorer1 = { name: "Explorer1", score: 3};
        const divide3 = FizzBuzz.applyValidationInExplorer(explorer1);

        expect(divide3.trick).toBe("FIZZ");
    });

    test("2. Divide by 5 and return Buzz", () => {
        const explorer2 = { name: "Explorer2", score: 5};
        const expldiv5 = FizzBuzz.applyValidationInExplorer(explorer2);

        expect(expldiv5.trick).toBe("BUZZ");
    });

    test("3. Divide by 5 and 3 and return FizzBuzz", () => {
        const explorer3 = { name: "Explorer3", score: 15};
        const expldiv53 = FizzBuzz.applyValidationInExplorer(explorer3);

        expect(expldiv53.trick).toBe("FIZZBUZZ");
    });

    test("4. Number not Divisible by 3 or 5 and return Score as Trick", () => {
        const explorer4 = { name: "Explorer4", score: 17};
        const expldiv = FizzBuzz.applyValidationInExplorer(explorer4);

        expect(expldiv.trick).toBe(17);
    });

    test("5. Validate if number is divisible between 3 or 15, if not return score", () => {
        const number = 15;
        const ValNum = FizzBuzz.applyValidationInNumber(number);

        expect(ValNum).toBe("FIZZBUZZ");
    });

});