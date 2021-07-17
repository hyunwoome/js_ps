function solution() {
  const input = require('fs')
    .readFileSync('src/boj/silver/bs/input', 'utf8')
    .trim()
    .toString()
    .split('\n');

  const N = input.shift();
  const Nth = input
    .shift()
    .split(' ')
    .map((el) => Number(el));
  const M = input.shift();
  const Mth = input
    .shift()
    .split(' ')
    .map((el) => Number(el));
}

solution();
