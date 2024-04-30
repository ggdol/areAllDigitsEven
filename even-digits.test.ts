import { areAllDigitsEven } from "./even-digits";

describe('one digit', () => {
    test.each([
        { input: 0, expected: true },
        { input: 1, expected: false },
        { input: 2, expected: true },
        { input: 9, expected: false }
    ])('input: $input, expect: $expected', ({input, expected}) => {

        expect(areAllDigitsEven(input)).toBe(expected);
    })
})

describe('two digit', () => {
    test.each([
        { input: 10, expected: false },
        { input: 11, expected: false },
        { input: 88, expected: true },
        { input: 98, expected: false },
    ])('input: $input, expect: $expected', ({input, expected}) => {

        expect(areAllDigitsEven(input)).toBe(expected);
    })
})

describe('many digits', () => {
    test.each([
        { input: 245, expected: false },
        { input: 246, expected: true },
        { input: 3280, expected: false },
        { input: 4284, expected: true },
    ])('input: $input, expect: $expected', ({input, expected}) => {

        expect(areAllDigitsEven(input)).toBe(expected);
    })
})