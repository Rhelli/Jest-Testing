const caesarCipher = require('../scripts/caeserCipher.js');

test('shifts letters up by a given number', () => {
  expect(caesarCipher('aaa', 3)).toBe('ccc');
});