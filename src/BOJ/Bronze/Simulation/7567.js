function solution() {
  const filePath =
    process.platform === 'linux'
      ? '/dev/stdin'
      : 'src/boj/bronze/simulation/input';
  const input = require('fs').readFileSync(filePath, 'utf8').trim().toString();
  let answer = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== input[i - 1]) answer += 10;
    else answer += 5;
  }
  return answer;
}
console.log(solution());
