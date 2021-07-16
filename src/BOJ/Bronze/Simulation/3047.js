function solution() {
  const input = require('fs')
    .readFileSync('src/boj/bronze/simulation/input', 'utf8')
    .trim()
    .toString()
    .split('\n');
  const N = input
    .shift()
    .split(' ')
    .map((el) => Number(el));
  const ABC = input.shift().split('');

  let sorting = N.sort((a, b) => a - b);
  let A = sorting.shift();
  let B = sorting.shift();
  let C = sorting.shift();

  let answer = [];
  for (let i = 0; i < ABC.length; i++) {
    if (ABC[i] === 'A') answer.push(A);
    if (ABC[i] === 'B') answer.push(B);
    if (ABC[i] === 'C') answer.push(C);
  }
  console.log(answer.join(' '));
}

solution();
