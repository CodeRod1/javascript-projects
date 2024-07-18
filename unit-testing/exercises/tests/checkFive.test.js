const checkFive = require('../checkFive.js');

describe("The checkFive function", function() {

    test("Returns 'num is less than 5' when num < 5", function() {
        let output = checkFive(3);
        expect(output).toBe("3 is less than 5.");
    });

    test("Returns 'num is equal to 5' when num === 5", function() {
        let output = checkFive(5);
        expect(output).toEqual("5 is equal to 5.");
    });

    test("Returns 'num is greater than 5' when num > 5", function() {
        let output = checkFive(7);
        expect(output).toBe("7 is greater than 5.");
    });


});