const input = require('fs')
  .readFileSync('src/baekjoon/simulation/input', 'utf8')
  .trim();

const nums = parseInt(input, 10);

let arr = [];

for (let i = 1; i <= nums; i++) {
  arr.push(i);
}

let answer = [];
while (arr.length !== 1) {
  answer.push(arr.shift());
  arr.push(arr.shift());
}
answer.push(arr[0]);

console.log(answer.join(' '));
