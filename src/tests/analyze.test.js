const analyze = require('../scripts/analyze');

const arrayTest = [1, 3];

test('takes an array and return the average value in it', () => {
  expect(analyze(arrayTest).average).toBe(2);
});

test('takes an array and returns the minimum value in it', () => {
  expect(analyze(arrayTest).min).toBe(1);
});

test('takes an array and returns the max value in it', () => {
  expect(analyze(arrayTest).max).toBe(3);
});

test('returns the length of the array', () => {
  expect(analyze(arrayTest).length).toBe(2);
});