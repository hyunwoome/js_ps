function solution() {
  const input = require('fs')
    .readFileSync('src/boj/silver/sort/input', 'utf8')
    .trim()
    .toString()
    .split('\n');
  const [N, K] = input
    .shift()
    .split(' ')
    .map((el) => +el);
  const arr = input
    .shift()
    .split(' ')
    .map((el) => +el);
  const sortingArr = arr.sort((a, b) => a - b);
  console.log(sortingArr[Number(K - 1)]);
}

solution();
