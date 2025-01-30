const { replaceNewLinesWithComma, replaceCustomDelimitersWithComma, throwExceptionForNegativeNumbers, convertToArray, removeNumbersNotAllowedThanLimit } = require("./lib/utils");

function parseInput(input) {
    if(!input || input?.trim() === '') {
        return [];
    }
    input = replaceCustomDelimitersWithComma(input);
    input = replaceNewLinesWithComma(input);
    throwExceptionForNegativeNumbers(input);
    arrayNumbers = convertToArray(input)
    arrayNumbers = removeNumbersNotAllowedThanLimit(arrayNumbers)
    return arrayNumbers;
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