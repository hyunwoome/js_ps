// src/baekjoon/implement/input
const input = require('fs')
  .readFileSync('dev/stdin', 'utf8')
  .split('\n')
  .map((el) => {
    return el.split(' ').map((nums) => Number(nums));
  });

const T = input.shift();
const x = T[0];

const arr = [];

for (let i = 0; i < x; i++) {
  arr.push(input.shift());
}

for (let k = 0; k < input.length; k++) {
  let sum = 0;
  let x1 = input[k][0];
  let y1 = input[k][1];
  let x2 = input[k][2];
  let y2 = input[k][3];

  for (let i = x1; i <= x2; i++) {
    for (let j = y1; j <= y2; j++) {
      sum += arr[i - 1][j - 1];
    }
  }
  if (sum) console.log(sum);
}
