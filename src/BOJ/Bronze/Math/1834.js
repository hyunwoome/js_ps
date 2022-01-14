function solution() {
  const filePath =
    process.platform === 'linux' ? '/dev/stdin' : 'src/boj/bronze/math/input';
  const input = require('fs').readFileSync(filePath, 'utf8').trim().toString();
  const N = Number(input);
  let answer = BigInt(0);
  for (let i = 0; i < N; i++) {
    answer += BigInt(N * i + i);
  }
  return answer.toString();
}
console.log(solution());
