export default [
  {
    name: 'Large Number Addition',
    operator: 'x',
    leftOperand() {
      return 12;
    },
    rightOperand() {
      return 43;
    },
    answer(left, right) {
      return left*right;
    }
  },
  {
    name: 'Large Number Subtraction',
  },
  {
    name: 'Standard Multiplication',
  },
  {
    name: 'Standard Division',
  },
  {
    name: 'Large Number Multiplication',
  },
  {
    name: 'Large Number Division',
  },
]
