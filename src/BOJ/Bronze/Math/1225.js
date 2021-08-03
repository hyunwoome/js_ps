function solution() {
  const filePath =
    process.platform === 'linux' ? '/dev/stdin' : 'src/boj/bronze/math/input';
  const input = require('fs').readFileSync(filePath, 'utf8').trim().toString();
  const [A, B] = input.split(' ');
  let answer = 0;
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      answer += +A[i] * +B[j];
    }
  }
  return answer;
}
console.log(solution());
