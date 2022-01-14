// boj 2798 (125) ('/dev/stdin')
const input = require('fs')
  .readFileSync('baekjoon/brute-force/input', 'utf8')
  .trim()
  .split('\n');
const NM = input.shift().split(' ');
const nums = input
  .shift()
  .split(' ')
  .map((num) => parseInt(num));
const N = parseInt(NM.shift());
const M = parseInt(NM.shift());

let max = 0;

for (let i = 0; i < N - 2; i++) {
  for (let j = i + 1; j < N - 1; j++) {
    for (let k = j + 1; k < N; k++) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum > max && sum <= M) {
        max = sum;
      }
    }
  }
}

console.log(max);
