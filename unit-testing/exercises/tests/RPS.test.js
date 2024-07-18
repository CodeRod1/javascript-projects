const tests = require('../rps.js');

describe("The whoWon function", function() {

    test("returns 'TIE!' if both players chose the same option", function() {
        let output = tests.whoWon('rock', 'rock');
        expect(output).toBe('TIE!');
    })

    test("returns 'Player 2 wins!' if P1 = rock & P2 = paper ", function() {
        let output = tests.whoWon('rock', 'paper');
        expect(output).toBe('Player 2 wins!');
    })

    test("returns 'Player 2 wins!' if P1 = paper & P2 = scissors ", function() {
        let output = tests.whoWon('paper', 'scissors');
        expect(output).toBe('Player 2 wins!');
    })

    test("returns 'Player 2 wins!' if P1 = scissors & P2 = rock ", function() {
        let output = tests.whoWon('scissors', 'rock');
        expect(output).toBe('Player 2 wins!');
    })

    test("returns 'Player 1 wins!' if P1 = rock & P2 = scissors ", function() {
        let output = tests.whoWon('rock', 'scissors');
        expect(output).toBe('Player 1 wins!');
    })

    test("returns 'Player 1 wins!' if P1 = paper & P2 = rock ", function() {
        let output = tests.whoWon('paper', 'rock');
        expect(output).toBe('Player 1 wins!');
    })

    test("returns 'Player 1 wins!' if P1 = scissors & P2 = paper ", function() {
        let output = tests.whoWon('scissors', 'paper');
        expect(output).toBe('Player 1 wins!');
    })
})