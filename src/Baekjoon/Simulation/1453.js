const input = require('fs')
  .readFileSync('src/baekjoon/simulation/input', 'utf8')
  .trim()
  .split('\n');

const N = Number(input.shift());
const arr = input
  .shift()
  .split(' ')
  .map((str) => {
    return str;
  });

let emptyArr = Array(101).fill(0);
let answer = 0;

for (let i = 0; i < N; i++) {
  if (emptyArr[arr[i]] !== 0) answer++;
  else emptyArr[arr[i]] = arr[i];
}

console.log(answer);
