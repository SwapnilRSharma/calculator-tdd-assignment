const { add, subtract, multiply, divide } = require('../src/calculator');
const { describe, test, expect } = require('@jest/globals');

describe('String Calculator', () => {
  
    describe('add', () => {
        test('should return 0 for an empty string', () => {
            expect(add('')).toBe(0);
        });

        test('should return the number for a single number', () => {
            expect(add('1')).toBe(1);
        });

        test('should return the sum of two numbers', () => {
            expect(add('1,2')).toBe(3);
        });

        test('should return the sum of multiple numbers', () => {
            expect(add('1,2,3')).toBe(6);
        }); 

        test('should handle new lines between numbers', () => {
            expect(add('1\n2,3')).toBe(6);
        });

        test('should handle different delimiters', () => {
            expect(add('//;\n1;2')).toBe(3);
        });

        test('should handle different delimiters with negative numbers', () => {
            expect(() => add('//;\n-1;2')).toThrow('Negative numbers are not allowed: -1');
        });

        test('should handle negative numbers', () => {
            expect(() => add('-1,2,-3')).toThrow('Negative numbers are not allowed: -1, -3');
        });

        test('Number bigger than 1000 should be avoided', () => {
            expect(add('1, 1001')).toBe(1);
        })

    });

    // describe('subtract', () => {
    //     test('should return 0 for an empty string', () => {
    //         expect(subtract('')).toBe(0);
    //     });

    //     test('should return the number for a single number', () => {
    //         expect(subtract('5')).toBe(5);
    //     });

    //     test('should return the difference of two numbers', () => {
    //         expect(subtract('10,5')).toBe(5);
    //     });

    //     test('should return the result of subtracting multiple numbers', () => {
    //         expect(subtract('20,5,3')).toBe(12);
    //     });

    //     test('should handle new lines between numbers', () => {
    //         expect(subtract('20\n5,3')).toBe(12);
    //     });

    //     test('should handle different delimiters', () => {
    //         expect(subtract('//;\n20;5;3')).toBe(12);
    //     });

    //     test('should throw an error for negative numbers', () => {
    //         expect(() => subtract('-10,5')).toThrow('Negative numbers are not allowed: -10');
    //     });
    // });

    // describe('multiply', () => {
    //     test('should return 0 for an empty string', () => {
    //         expect(multiply('')).toBe(0);
    //     });

    //     test('should return the number for a single number', () => {
    //         expect(multiply('5')).toBe(5);
    //     });

    //     test('should return the product of two numbers', () => {
    //         expect(multiply('4,5')).toBe(20);
    //     });

    //     test('should return the product of multiple numbers', () => {
    //         expect(multiply('2,3,4')).toBe(24);
    //     });

    //     test('should handle new lines between numbers', () => {
    //         expect(multiply('2\n3,4')).toBe(24);
    //     });

    //     test('should handle different delimiters', () => {
    //         expect(multiply('//;\n2;3;4')).toBe(24);
    //     });

    //     test('should throw an error for negative numbers', () => {
    //         expect(() => multiply('-2,3')).toThrow('Negative numbers are not allowed: -2');
    //     });
    // });

    // describe('divide', () => {
    //     test('should return 0 for an empty string', () => {
    //         expect(divide('')).toBe(0);
    //     });

    //     test('should return the number for a single number', () => {
    //         expect(divide('10')).toBe(10);
    //     });

    //     test('should return the result of dividing two numbers', () => {
    //         expect(divide('20,5')).toBe(4);
    //     });

    //     test('should return the result of dividing multiple numbers', () => {
    //         expect(divide('100,2,5')).toBe(10);
    //     });

    //     test('should handle new lines between numbers', () => {
    //         expect(divide('100\n2,5')).toBe(10);
    //     });

    //     test('should handle different delimiters', () => {
    //         expect(divide('//;\n100;2;5')).toBe(10);
    //     });

    //     test('should throw an error for division by zero', () => {
    //         expect(() => divide('10,0')).toThrow('Division by zero is not allowed.');
    //     });

    //     test('should throw an error for negative numbers', () => {
    //         expect(() => divide('-100,2')).toThrow('Negative numbers are not allowed: -100');
    //     });
    // });

});