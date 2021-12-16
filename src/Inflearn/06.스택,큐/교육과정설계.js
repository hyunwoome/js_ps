const solution = (a, b) => {
  let result = '';
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j]) result += b[j];
    }
  }
  return a === result ? 'YES' : 'NO';
};

const a = 'CBA';
const b = 'CBDAGE';
console.log(solution(a, b));
