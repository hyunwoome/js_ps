const solution = (str, char) => {
  let count = 0;
  for (const s of str) {
    if (s === char) count++;
  }
  return count;
};

const str = 'COMPUTERPROGRAMMING';
const char = 'R';
console.log(solution(str, char));
