function solution(a, b, c) {
  let arr = [];
  arr.push(a);
  arr.push(b);
  arr.push(c);
  return Math.min(...arr);
}

function solution2(a, b, c) {
  let answer = 0;
  if (a < b) answer = a;
  else answer = b;
  if (c < answer) answer = c;
  return answer;
}

console.log(solution(6, 5, 11));
console.log(solution2(6, 5, 11));
