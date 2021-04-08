// boj 17299 (99) ('/dev/stdin')

const fs = require('fs').readFileSync('stack/input', 'utf8').trim().split('\n');
const N = Number(fs.shift()); // 7
const nums = fs
  .toString()
  .split(' ')
  .map((el) => Number(el)); // [1, 1, 2, 3, 4, 2, 1]

let stack = [];
let answer = Array(nums.length).fill(-1);
