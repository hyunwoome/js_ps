const solution = (str) => {
  let result = '';
  for (const s of str) {
    if (s === s.toUpperCase()) result += s.toLowerCase();
    else result += s.toUpperCase();
  }
  return result;
};

const str = 'StuDY';
console.log(solution(str));
