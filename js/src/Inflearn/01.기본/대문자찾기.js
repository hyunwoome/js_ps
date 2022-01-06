const solution = (str) => {
  let result = 0;
  for (const s of str) {
    if (s === s.toUpperCase()) result++;
  }
  return result;
};

const str = 'KoreaTimeGood';
console.log(solution(str));
