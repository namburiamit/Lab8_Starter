// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');


// TODO - Part 2

// Tests for 'isPhoneNumber' method

test('First Phone number: Correct', () => {
    expect(functions.isPhoneNumber('000-000-0000')).toBe(true);
});

test('Second Phone number: Correct', () => {
    expect(functions.isPhoneNumber('858-123-4567')).toBe(true);
});

test('Third Phone number: Incorrect', () => {
    expect(functions.isPhoneNumber('0')).toBe(false);
});

test('Fourth Phone number: Incorrect', () => {
    expect(functions.isPhoneNumber('111-111')).toBe(false);
});


// Tests for 'isEmail' method

test('First Email number: Correct', () => {
    expect(functions.isEmail('namburiamit@gmail.com')).toBe(true);
});

test('Second Email number: Correct', () => {
    expect(functions.isEmail('anamburi@ucsd.edu')).toBe(true);
});

test('Third Email number: Incorrect', () => {
    expect(functions.isEmail('hello@')).toBe(false);
});

test('Fourth Email number: Incorrect', () => {
    expect(functions.isEmail('@.com')).toBe(false);
});


// Tests for 'isStrongPassword' method

test('First Password: Correct', () => {
    expect(functions.isStrongPassword('amit')).toBe(true);
});

test('Second Password: Correct', () => {
    expect(functions.isStrongPassword('hello123')).toBe(true);
});

test('Third Password: Incorrect', () => {
    expect(functions.isStrongPassword('12132amit')).toBe(false);
});

test('Fourth Password: Incorrect', () => {
    expect(functions.isStrongPassword('1213')).toBe(false);
});


// Tests for 'isDate' method

test('First Date: Correct', () => {
    expect(functions.isDate('05/26/2023')).toBe(true);
});

test('Second Date: Correct', () => {
    expect(functions.isDate('11/11/1111')).toBe(true);
});

test('Third Date: Incorrect', () => {
    expect(functions.isDate('11/11/11/1/1')).toBe(false);
});

test('Fourth Date: Incorrect', () => {
    expect(functions.isDate('1111/11/11')).toBe(false);
});


// Tests for 'isHexColor' method

test('First Hex: Correct', () => {
    expect(functions.isHexColor('#aaa')).toBe(true);
});

test('Second Hex: Correct', () => {
    expect(functions.isHexColor('#008000')).toBe(true);
});

test('Third Hex: Incorrect', () => {
    expect(functions.isHexColor('#xxxxxxxxxx')).toBe(false);
});

test('Fourth Hex: Incorrect', () => {
    expect(functions.isHexColor('#lmao')).toBe(false);
});
