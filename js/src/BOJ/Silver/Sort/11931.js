function solution() {
  const input = require('fs')
    .readFileSync('src/boj/silver/sort/input', 'utf8')
    .trim()
    .toString()
    .split('\n')
    .map((el) => +el);
  const N = input.shift();
  let answer = '';
  const sortable = input.sort((a, b) => b - a);
  for (let i = 0; i < sortable.length; i++) answer += sortable[i] + '\n';
  console.log(answer);
}

solution();
