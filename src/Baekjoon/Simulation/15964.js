function solution() {
  const input = require('fs')
    .readFileSync('src/baekjoon/simulation/input', 'utf8')
    .trim()
    .toString()
    .split(' ');
  const [A, B] = input;

  function operator(a, b) {
    return (a + b) * (a - b);
  }

  console.log(operator(Number(A), Number(B)));
}

solution();
