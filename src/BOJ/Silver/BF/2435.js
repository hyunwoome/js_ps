function solution() {
  const filePath =
    process.platform === 'linux' ? '/dev/stdin' : 'src/boj/silver/bf/input';
  const input = require('fs')
    .readFileSync(filePath, 'utf8')
    .trim()
    .toString()
    .split('\n');

  const [N, K] = input.shift().split(' ').map(Number);
  const temp = input.shift().split(' ').map(Number);

  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i <= N - K; i++) {
    let sum = 0;
    for (let j = 0; j < K; j++) {
      sum += temp[i + j];
    }
    max = Math.max(max, sum);
  }
  return max;
}

console.log(solution());
