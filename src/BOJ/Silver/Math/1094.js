function solution() {
  const filePath =
    process.platform === 'linux' ? '/dev/stdin' : 'src/boj/silver/math/input';
  const input = require('fs').readFileSync(filePath, 'utf8').trim().toString();
  let result = 0;
  let len = 64;
  let X = +input;
  while (X) {
    if (len > X) len /= 2;
    else {
      result++;
      X -= len;
    }
  }
  return result;
}
console.log(solution());
