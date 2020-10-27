const analyze = (arr) => {
  const average = () => arr.reduce((a, b) => (a + b)) / arr.length;
  const max = () => Math.max(...arr);
  const min = () => Math.min(...arr);
  const length = () => arr.length;
  return {
    average: average(),
    min: min(),
    max: max(),
    length: length(),
  };
};

module.exports = analyze;