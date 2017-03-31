export default [
  {
    name: 'Large Number Addition',
    operator: '+',
    generateSet() {
      const left = 100 + Math.floor(Math.random()*100000);
      const right = 100 + Math.floor(Math.random()*100000);

      const answer = Number(left) + Number(right);

      return { left, right, answer };
    },
  },
  {
    name: 'Large Number Subtraction',
    operator: '-',
    generateSet() {
      const right = 100 + Math.floor(Math.random()*100000);
      const left = right + Math.floor(Math.random()*100000);

      const answer = Number(left) - Number(right);

      return { left, right, answer };
    },
  },
  {
    name: 'Standard Multiplication',
    operator: '×',
    generateSet() {
      const left = 100 + Math.floor(Math.random()*1000);
      const right = 10 + Math.floor(Math.random()*10);

      const answer = Number(left)*Number(right);

      return { left, right, answer };
    },
  },
  {
    name: 'Standard Division',
    operator: '÷',
    generateSet() {
      const right = 10 + Math.floor(Math.random()*10);
      const answer = 5 + Math.floor(Math.random()*10);

      const left = right * answer;

      return { left, right, answer };
    },
  },
  {
    name: 'Large Number Multiplication',
    operator: '×',
    generateSet() {
      const left = 1000 + Math.floor(Math.random()*10000);
      const right = 100 + Math.floor(Math.random()*100);

      const answer = Number(left)*Number(right);

      return { left, right, answer };
    },
  },
  {
    name: 'Large Number Division',
    operator: '÷',
    generateSet() {
      const right = 100 + Math.floor(Math.random()*100);
      const answer = 50 + Math.floor(Math.random()*100);

      const left = right * answer;

      return { left, right, answer };
    },
  },
]
