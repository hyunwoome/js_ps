// boj 10824 (107) ('/dev/stdin')
// 1020+3040 = 4060

const input = require('fs')
  .readFileSync('implement/input', 'utf8')
  .trim()
  .split(' ');

let a = input[0] + input[1];
let b = input[2] + input[3];
console.log(Number(a) + Number(b));
