const caesarCipher = (string, number) => string.toUpperCase().replace(/[A-Z]/g, c => String.fromCharCode((c.charCodeAt(0) - 65 + number % 26) + 65));

module.exports = caesarCipher;