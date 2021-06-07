// /dev/stdin

const input = require('fs')
  .readFileSync('src/baekjoon/implement/input', 'utf8')
  .trim()
  .split(' ')
  .map((el) => parseInt(el));

const R1 = input[0];
const S = input[1];
console.log(S * 2 - R1);
