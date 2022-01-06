function solution() {
  const input = require('fs')
    .readFileSync('src/boj/bronze/simulation/input', 'utf8')
    .trim()
    .toString()
    .split('\n');
  const T = input.shift();
  const arr = input
    .shift()
    .split(' ')
    .map((el) => Number(el));
  const sortedArr = arr.slice().sort((a, b) => a - b);
  let answer = 0;
  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] !== arr[i]) answer++;
  }
  console.log(answer);
}

solution();
