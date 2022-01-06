function solution() {
  const filePath =
    process.platform === 'linux' ? '/dev/stdin' : 'src/boj/bronze/math/input';
  const input = require('fs').readFileSync(filePath, 'utf8').trim().toString();
  let N = Number(input);
  let d = 10;
  while (N > d) {
    if (N % d >= Math.floor(d / 2)) {
      N += d;
    }
    N -= N % d;
    d *= 10;
  }
  return N;
}
console.log(solution());
