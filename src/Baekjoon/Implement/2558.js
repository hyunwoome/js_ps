const input = require('fs')
  .readFileSync('/dev/stdin', 'utf8')
  .toString()
  .split('\n')
  .map((el) => Number(el));
// const input = require('fs')
//   .readFileSync('src/baekjoon/implement/input', 'utf8')
//   .toString()
//   .split('\n')
//   .map((el) => Number(el));

console.log(input[0] + input[1]);
