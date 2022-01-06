function solution() {
  const input = require('fs')
    .readFileSync('src/baekjoon/simulation/input', 'utf8')
    .trim()
    .toString()
    .split('\n');
  const TOTAL_PRICE = Number(input.shift());
  let sum = input.reduce((acc, cur) => {
    return Number(acc) + Number(cur);
  });
  console.log(TOTAL_PRICE - sum);
}

solution();
