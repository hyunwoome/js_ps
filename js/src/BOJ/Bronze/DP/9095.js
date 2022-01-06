// boj 9095 (126) ('/dev/stdin')
const fs = require('fs');
const input = fs
  .readFileSync('baekjoon/dp/input', 'utf8')
  .trim()
  .split('\n')
  .map((el) => parseInt(el));
const TEST_CASE = input.shift(); // 3

function solve(n) {
  if (n < 0) return 0;
  if (n === 0) return 1;
  return solve(n - 1) + solve(n - 2) + solve(n - 3);
}

for (let i = 0; i < TEST_CASE; i++) {
  console.log(solve(input[i]));
}
