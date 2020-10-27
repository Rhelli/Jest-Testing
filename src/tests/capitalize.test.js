const capitalize = require('../scripts/capitalize.js');

test('it capitalizes', () => {
  expect(capitalize('lolz')).toBe('Lolz');
});