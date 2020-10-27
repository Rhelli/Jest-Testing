const caesarCipher = (string, number) => {
  return string.toLowerCase().replace(/[a-z]/g, c => (String.fromCharCode((c.charCodeAt(0) - 65 + number) % 26) + 65));
};

module.exports = caesarCipher;