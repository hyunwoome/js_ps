const input = require('fs')
  .readFileSync('src/baekjoon/implement/input', 'utf8')
  .toString()
  .trim();

let answer = '';
for (let i = 0; i < input.length; i++) {
  if ('A' <= input[i] && input[i] <= 'Z') answer += input[i];
}

console.log(answer);
