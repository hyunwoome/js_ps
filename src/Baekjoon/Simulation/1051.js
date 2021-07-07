let input = require('fs')
  .readFileSync('src/baekjoon/simulation/input', 'utf8')
  .trim()
  .split('\n');

const [N, M] = input.shift().split(' ');

let MAX = Math.max(N, M);
let answer = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    for (let k = 0; k < MAX; k++) {
      if (i + k < N && j + k < M) {
        if (
          input[i][j] === input[i][j + k] &&
          input[i][j] === input[i + k][j] &&
          input[i][j] === input[i + k][j + k]
        ) {
          answer = Math.max(answer, k + 1);
        }
      }
    }
  }
}

console.log(answer * answer);
