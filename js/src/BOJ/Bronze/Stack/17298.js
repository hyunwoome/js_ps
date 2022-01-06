// boj 17298 (98) ('/dev/stdin')

const fs = require('fs').readFileSync('stack/input', 'utf8').trim().split('\n');
const N = Number(fs.shift());
const nums = fs
  .toString()
  .split(' ')
  .map((el) => Number(el));
// [3, 5, 2, 7]

let stack = [];
let answer = Array(nums.length).fill(-1);

for (let i = 0; i < nums.length; i++) {
  while (stack.length && nums[stack[stack.length - 1]] < nums[i]) {
    answer[stack.pop()] = nums[i];
  }
  stack.push(i);
}

console.log(answer.join(' '));
