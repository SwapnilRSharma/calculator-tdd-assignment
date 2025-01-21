const { checkForNewLines, checkForCustomDelimiters, checkForNegativeNumbers } = require("./lib/utils");

function parseInput(input) {
    if(!input || input?.trim() === '') {
        return [];
    }
    input = checkForCustomDelimiters(input);
    input = checkForNewLines(input);
    checkForNegativeNumbers(input);

    return input.split(',').map(number => parseInt(number));
}

function add(input) {
    const numbers = parseInput(input);
    return numbers.reduce((sum, num) => sum + num, 0);
}

function subtract(input) {
    const numbers = parseInput(input);
    return numbers.length > 0 ? numbers.reduce((result, num) => result - num) : 0;
}

function multiply(input) {
    const numbers = parseInput(input);
    return numbers.length > 0 ? numbers.reduce((result, num) => result * num, 1) : 0;
}

function divide(input) {
    const numbers = parseInput(input);
    return numbers.length > 0 ? numbers.reduce((result, num) => {
        if (num === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return result / num;
    }) : 0;
}

module.exports = { add, subtract, multiply, divide };