// const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const input = require('fs')
  .readFileSync('src/baekjoon/implement/input', 'utf8')
  .toString();

console.log(parseInt(input, 16));
