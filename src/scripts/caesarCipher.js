const caesarCipher = (char, shift) => {
  const newString = [];
  const upperAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const lowerAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  for (let i = 0; i < char.length; i++) {
    if (upperAlphabet.includes(char[i])) {
      const position = upperAlphabet.indexOf(char[i]);
      const newPosition = (position + shift) % 26;
      newString.push(upperAlphabet[newPosition]);
    } else if (lowerAlphabet.includes(char[i])) {
      const position = lowerAlphabet.indexOf(char[i]);
      const newPosition = (position + shift) % 26;
      newString.push(lowerAlphabet[newPosition]);
    } else {
      newString.push(char[i]);
    }
  }
  return newString.join('');
};

module.exports = caesarCipher;