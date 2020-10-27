function Calculator(a, b) {
  this.a = a;
  this.b = b;

  const add = () => a + b;
  const subtract = () => a - b;
  const divide = () => a / b;
  const multiply = () => a * b;
  return {
    add, subtract, divide, multiply,
  };
}

module.exports = Calculator;
