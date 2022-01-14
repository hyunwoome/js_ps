// /dev/stdin

const input = require('fs')
  .readFileSync('src/baekjoon/implement/input', 'utf8')
  .trim()
  .split(' ')
  .map((el) => Number(el));

let sum = 0;
for (const num of input) {
  sum += Math.pow(num, 2);
}

console.log(sum % 10);
