const capitalize = (string) => string.charAt(0).toUpperCase() + string.split('').slice(1).join('');

module.exports = capitalize;