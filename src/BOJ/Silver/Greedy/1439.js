function solution() {
  const input = require('fs')
    .readFileSync('src/boj/silver/greedy/input', 'utf8')
    .trim()
    .toString();
  let zero = 0;
  let one = 0;
  for (let i = 0; i < input.length - 1; i++) {
    if (input[i] === '0' && input[i + 1] === '1') zero++;
    else if (input[i] === '1' && input[i + 1] === '0') one++;
  }
  console.log(Math.min(zero, one));
}

solution();
