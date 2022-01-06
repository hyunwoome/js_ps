function solution() {
  const input = require('fs')
    .readFileSync('src/boj/bronze/math/input', 'utf8')
    .trim()
    .toString();

  const N = Number(input);
  console.log(N.toString(2));
}

solution();
