const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
// const input = require('fs')
//   .readFileSync('src/Baekjoon/Implement/input')
//   .toString()
//   .split('\n');

// const input = [[5], [1, 6], [3, 7], [6, 2], [7, 100], [9, 635]];
const TS = input.shift()[0];

for (let i = 0; i < input.length; i++) {
  let [a, b] = input[i].split(' ').map((i) => Number(i));
  let d = 1;
  for (let j = 0; j < (b % 4) + 4; j++) {
    d = (d * a) % 10;
  }
  console.log(d || 10);
}
