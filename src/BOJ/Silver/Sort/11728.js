function solution() {
  const input = require('fs')
    .readFileSync('src/boj/silver/sort/input', 'utf8')
    .trim()
    .toString()
    .split('\n');
  const [N, M] = input
    .shift()
    .split(' ')
    .map((el) => +el);
  const A = input
    .shift()
    .split(' ')
    .map((el) => +el);
  const B = input
    .shift()
    .split(' ')
    .map((el) => +el);

  console.log([...A, ...B].sort((a, b) => a - b).join(' '));
}

solution();
