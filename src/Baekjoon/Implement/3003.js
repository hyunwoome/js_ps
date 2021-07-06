const input = require('fs')
  .readFileSync('src/baekjoon/implement/input', 'utf8')
  .toString()
  .trim()
  .split(' ')
  .map((el) => Number(el));

const pieces = [1, 1, 2, 2, 2, 8];

let answer = [];
for (let i = 0; i < input.length; i++) {
  answer.push(pieces[i] - input[i]);
}

console.log(answer.join(' '));
