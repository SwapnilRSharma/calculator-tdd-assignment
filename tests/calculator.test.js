const { add } = require('../src/calculator');
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

    });

});