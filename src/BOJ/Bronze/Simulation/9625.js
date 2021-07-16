const input = require('fs')
  .readFileSync('src/baekjoon/simulation/input', 'utf8')
  .trim();

let N = Number(input);
let answer = [];

if (N >= 1) answer = [0, 1];

while (N !== 1) {
  let tmp = answer[0];
  answer[0] = answer[1];
  answer[1] = tmp + answer[1];
  N--;
}
console.log(answer.join(' '));
