const reverseString = require('../scripts/reverseString.js');

test('it reverse a String', () => {
  expect(reverseString('lolz')).toBe('zlol');
});