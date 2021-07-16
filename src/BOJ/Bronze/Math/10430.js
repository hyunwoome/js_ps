// boj 10430 (109) ('/dev/stdin')
const input = require('fs')
  .readFileSync('math/input', 'utf8')
  .trim()
  .split(' ');

const A = Number(input.shift());
const B = Number(input.shift());
const C = Number(input.shift());

console.log((A + B) % C);
console.log(((A % C) + (B + C)) % C);
console.log((A * B) % C);
console.log(((A % C) * (B % C)) % C);
