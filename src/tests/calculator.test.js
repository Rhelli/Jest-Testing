const calculator = require('../classes/calculator');

const calc = calculator(6, 4);
test('returns the sum of two numbers', () => {
  expect(calc.add()).toBe(10);
});

test('returns the substraction of two numbers', () => {
  expect(calc.subtract()).toBe(2);
});

test('returns the division of two numbers', () => {
  expect(calc.divide()).toBe(1.5);
});

test('returns the multiplication of two numbers', () => {
  expect(calc.multiply()).toBe(24);
});