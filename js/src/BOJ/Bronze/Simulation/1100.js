// /dev/stdin

const input = require('fs')
  .readFileSync('src/baekjoon/implement/input', 'utf8')
  .trim()
  .split('\n')
  .map((el) => el.split(''));

let answer = 0;
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[i].length; j++) {
    if ((i + j) % 2 === 0 && input[i][j] === 'F') answer++;
  }
}

console.log(answer);
