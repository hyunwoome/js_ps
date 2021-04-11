// boj 2609 (110) ('/dev/stdin')
const input = require('fs')
  .readFileSync('math/input', 'utf8')
  .trim()
  .split(' ');

const A = Number(input.shift());
const B = Number(input.shift());

// 1. 최대공약수
// 2. 최소공배수

function gcd(a, b) {
  while (b > 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

console.log(gcd(A, B));
console.log(lcm(A, B));
