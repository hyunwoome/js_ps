function solution() {
  const input = require('fs')
    .readFileSync('src/boj/bronze/simulation/input', 'utf8')
    .trim()
    .toString()
    .split('\n');
  const T = input.shift();
  const number = input
    .shift()
    .split(' ')
    .map((el) => Number(el));
  let answer = [];
  for (let i = 0; i < number.length; i++) {
    answer.splice(i - number[i], 0, i + 1);
  }
  console.log(answer.join(' '));
}

solution();
