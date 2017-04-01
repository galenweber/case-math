export default [
  {
    name: 'Large Number Addition',
    operator: '+',
    color: '#F44336', // Red
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
    color: '#FF9800',  // Orange
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
    color: '#4CAF50',  // Green
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
    color: '#009688',  // Teal
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
    color: '#03A9F4',  // Light Blue
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
    color: '#0D47A1', // Dark Blue,
    generateSet() {
      const right = 100 + Math.floor(Math.random()*100);
      const answer = 50 + Math.floor(Math.random()*100);

      const left = right * answer;

      return { left, right, answer };
    },
  },
]
