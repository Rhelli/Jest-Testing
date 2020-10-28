const caesarCipher = require('../scripts/caesarCipher');

test('returns same case of letters', () => {
  expect(caesarCipher('aaa', 0)).toBe('aaa');
});

test('returns given letters shifted up by a given number', () => {
  expect(caesarCipher('aaa', 3)).toBe('ddd');
});

test('returns shifted letters in same given case', () => {
  expect(caesarCipher('AaA', 2)).toBe('CcC');
});

test('it wraps the shifted letters if the given number exceeds 26', () => {
  expect(caesarCipher('zyX', 2)).toBe('baZ');
});