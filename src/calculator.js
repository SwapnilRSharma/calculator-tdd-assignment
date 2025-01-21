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

module.exports = { add };