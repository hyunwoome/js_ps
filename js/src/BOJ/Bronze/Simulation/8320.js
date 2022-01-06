function solution() {
  const input = require('fs')
    .readFileSync('src/baekjoon/simulation/input', 'utf8')
    .trim()
    .toString();
  const nums = parseInt(input);
  let answer = 0;
  for (let i = 1; i <= nums; i++) {
    for (let j = i; i * j <= nums; j++) {
      answer++;
    }
  }
  console.log(answer);
}

solution();
