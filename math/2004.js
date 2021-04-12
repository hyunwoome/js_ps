// boj 2004 (116) ('/dev/stdin')
const input = require('fs')
  .readFileSync('math/input', 'utf8')
  .trim()
  .split(' ');

const n = Number(input.shift()); // 25
const m = Number(input.shift()); // 12

const countPow = (number, base) => {
  let count = 0;
  while (number >= base) {
    count += Math.floor(number / base);
    number /= base;
  }
  return count;
};

let consider5 = countPow(n, 5) - countPow(m, 5) - countPow(n - m, 5);
let consider2 = countPow(n, 2) - countPow(m, 2) - countPow(n - m, 2);

console.log(Math.min(consider5, consider2));
