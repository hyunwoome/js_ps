function solution() {
  const input = require('fs')
    .readFileSync('src/baekjoon/simulation/input', 'utf8')
    .split('\n')
    .map((el) => {
      return el.split(' ').map((str) => Number(str));
    });
  let max = -Infinity;
  let x = 0;
  let y = 0;
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      if (input[i][j] > max) {
        max = Math.max(max, input[i][j]);
        x = i;
        y = j;
      }
    }
  }
  console.log(max);
  console.log(x + 1, y + 1);
}

solution();
