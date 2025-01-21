function checkForNegativeNumbers(numbers) {
    const negativeNumbers = numbers.split(',').filter(number => parseInt(number) < 0);
    if(negativeNumbers.length > 0) {
        throw new Error('Negative numbers are not allowed: ' + negativeNumbers.join(', '));
    }
}

function checkForCustomDelimiters(input) {
    if(input.startsWith('//')) {
        const delimiter = input.split('\n')[0].slice(2);
        input = input.split('\n')[1];
        input = input.replace(new RegExp(delimiter, 'g'), ',');
    }
    return input;
}

function checkForNewLines(input) {
    input = input.replace(/\n/g, ',');
    return input;
}

module.exports = { checkForNegativeNumbers, checkForCustomDelimiters, checkForNewLines };