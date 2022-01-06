const input = require('fs')
  .readFileSync('src/baekjoon/implement/input', 'utf8')
  .trim()
  .split('\n');

const MAX_SIZE = 15;
let answer = '';
for (let i = 0; i < MAX_SIZE; i++) {
  for (let j = 0; j < 5; j++) {
    if (input[j][i] === undefined) continue;
    else answer += input[j][i];
  }
}

console.log(answer);
