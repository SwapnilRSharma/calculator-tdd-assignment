function throwExceptionForNegativeNumbers(numbers) {
    const negativeNumbers = numbers.split(',').filter(number => parseInt(number) < 0);
    if(negativeNumbers.length > 0) {
        throw new Error('Negative numbers are not allowed: ' + negativeNumbers.join(', '));
    }
}

function replaceCustomDelimitersWithComma(input) {
    if(input.startsWith('//')) {
        const delimiter = input.split('\n')[0].slice(2);
        input = input.split('\n')[1];
        input = input.replace(new RegExp(delimiter, 'g'), ',');
    }
    return input;
}

function replaceNewLinesWithComma(input) {
    input = input.replace(/\n/g, ',');
    return input;
}

function convertToArray(input) {
    return input.split(',')
}

function removeNumbersNotAllowedThanLimit(input) {
    let updatedInput = []
    input.map((item) => {
        if(parseInt(item) <= 1000) updatedInput.push(parseInt(item))
    })
    return updatedInput
}

module.exports = { throwExceptionForNegativeNumbers, replaceCustomDelimitersWithComma, replaceNewLinesWithComma, convertToArray, removeNumbersNotAllowedThanLimit };