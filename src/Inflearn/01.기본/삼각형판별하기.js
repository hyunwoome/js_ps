const solution = (a, b, c) => {
  let answer = 'YES';
  let max = 0;
  let sum = a + b + c;

  if (a < b) max = b;
  else max = a;
  if (sum - max <= max) answer = 'NO';
  return answer;
};

const a = 6;
const b = 7;
const c = 11;
console.log(solution(a, b, c));
