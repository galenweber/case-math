export default [
  {
    name: 'Large Number Addition',
    operator: '+',
    genOperands() {
      return [ Math.floor(Math.random()*10), Math.floor(Math.random()*10) ]
    },

    answer(left, right) {
      return Number(left)+Number(right);
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
