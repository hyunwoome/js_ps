function solution() {
  const input = require('fs')
    .readFileSync('src/boj/queue/input', 'utf8')
    .trim()
    .toString();
  const N = Number(input);
  let arr = [];
  for (let i = 1; i <= N; i++) {
    arr.push(i);
  }
  while (arr.length !== 1) {
    arr.shift();
    arr.push(arr.shift());
  }
  console.log(arr.join(''));
}

solution();
